import React, { useState } from 'react';
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const [photo, setPhoto] = useState(null);
  const [videoFiles, setVideoFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadError, setUploadError] = useState({});
  const [formData, setFormData] = useState({ videos: [], pdfs: [] });
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async (file, type) => {
    if (!file) {
      setUploadError(prev => ({ ...prev, [type]: `Please select a ${type}` }));
      return;
    }
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(prev => ({ ...prev, [type]: progress.toFixed(0) }));
      },
      (error) => {
        setUploadError(prev => ({ ...prev, [type]: `${type} upload failed: ${error.message}` }));
        setUploadProgress(prev => ({ ...prev, [type]: null }));
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (type === 'photo') {
            setFormData(prev => ({ ...prev, [type]: downloadURL }));
          } else {
            setFormData(prev => ({ ...prev, [type]: [...prev[type], downloadURL] }));
          }
          setUploadProgress(prev => ({ ...prev, [type]: null }));
          setUploadError(prev => ({ ...prev, [type]: null }));
        });
      }
    );
  };

  const handleMultipleUploads = async (files, type) => {
    if (files.length === 0) {
      setUploadError(prev => ({ ...prev, [type]: `Please select ${type}` }));
      return;
    }
    files.forEach(file => handleUpload(file, type));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/courseservice/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong.");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Course</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Title"
          required
          id="title"
          className="flex-1"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Select
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="uncategorized">Select a category</option>
          <option value="Technical Courses">Technical Courses</option>
          <option value="Business Courses">Business Courses</option>
          <option value="Creative Arts">Creative Arts</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Academic Subjects">Academic Subjects</option>
          <option value="Specialized Skills">Specialized Skills</option>
        </Select>

        {/* Single Image Upload */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={() => handleUpload(photo, 'photo')}
            disabled={uploadProgress.photo}
          >
            {uploadProgress.photo ? (
              <CircularProgressbar
                value={parseInt(uploadProgress.photo, 10)}
                text={`${uploadProgress.photo}%`}
                styles={buildStyles({ pathColor: `rgba(62, 152, 199, ${uploadProgress.photo / 100})` })}
              />
            ) : (
              "Upload Photo"
            )}
          </Button>
        </div>
        {uploadError.photo && <Alert color="failure">{uploadError.photo}</Alert>}
        {formData.photo && (
          <img src={formData.photo} alt="Uploaded" className="w-full h-72 object-cover" />
        )}

        {/* Multiple Videos Upload */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="video/*"
            multiple
            onChange={(e) => setVideoFiles([...videoFiles, ...Array.from(e.target.files)])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={() => handleMultipleUploads(videoFiles, 'videos')}
          >
            Upload Videos
          </Button>
        </div>
        {Object.keys(uploadError).filter(key => key.startsWith('videos')).map(key => (
          <Alert key={key} color="failure">{uploadError[key]}</Alert>
        ))}
        {formData.videos.map((video, index) => (
          <video key={index} controls src={video} className="w-full h-72 object-cover"></video>
        ))}

        {/* Multiple PDFs Upload */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="application/pdf"
            multiple
            onChange={(e) => setPdfFiles([...pdfFiles, ...Array.from(e.target.files)])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={() => handleMultipleUploads(pdfFiles, 'pdfs')}
          >
            Upload PDFs
          </Button>
        </div>
        {Object.keys(uploadError).filter(key => key.startsWith('pdfs')).map(key => (
          <Alert key={key} color="failure">{uploadError[key]}</Alert>
        ))}
        {formData.pdfs.map((pdf, index) => (
          <div key={index} className="text-center mt-4">
            <a href={pdf} target="_blank" rel="noopener noreferrer">View PDF {index + 1}</a>
          </div>
        ))}

        <ReactQuill
          theme="snow"
          placeholder="Write Content..."
          className="h-72 mb-12"
          required
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">Publish</Button>
        {publishError && <Alert color="failure">{publishError}</Alert>}
      </form>
    </div>
  );
}
