import React, { useEffect, useState } from 'react';
import { Modal, Table, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashPayment() {
  return (

    <div className='w-full p-5 scrollbar'>
      
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Payment Date and Time</Table.HeadCell>
              <Table.HeadCell>Payment ID</Table.HeadCell>
              <Table.HeadCell>User ID</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            
              <Table.Body className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <span
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link className='text-teal-500 hover:underline'>
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
          </Table>
          
            <button className='w-full text-teal-500 self-center text-sm py-7'>
              Show more
            </button>
      
      <Modal>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this Notification?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure'>
                Yes, I'm sure
              </Button>
              <Button>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}