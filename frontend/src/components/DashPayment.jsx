import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";
import { FaCheck } from "react-icons/fa";

export default function DashPayment() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const res = await axios.get("/paymentservice/api/stripe/");
      setPayments(res.data);
    };
    fetchPayments();
  }, []);

  console.log(payments);

  return (
    <div className="w-full p-5 scrollbar">
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Course Name</Table.HeadCell>
          <Table.HeadCell>Approved</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {payments.map((payment, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{payment.payemail}</Table.Cell>
              <Table.Cell>${payment.amount}.00</Table.Cell>
              <Table.Cell>{payment.courseName}</Table.Cell>
              <Table.Cell>
                <FaCheck className="text-green-500 ml-5" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <button className="w-full text-teal-500 self-center text-sm py-7">
        Show more
      </button>

      <Modal>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Notification?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure">Yes, I'm sure</Button>
              <Button>No, cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
