"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function AddFundModal({ isOpen, onClose, data }) {
  const [openModal, setOpenModal] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header className="pt-4 pb-3 pl-0 ml-0 ps-4 ms-0 bg-gray-10">
          {data.title}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="py-2">
              <div className="text-left text-lg font-semibold pb-1">Amount</div>
              <input
                type="text"
                className="border border-purple border-solid border-1 rounded-md px-4 py-3 focus:outline-none focus:ring focus:ring-purple w-full"
                // style={{ border: "1px solid #71065d !important" }}
              />
              <small>Minimum amount $50</small>
            </div>
            <div className="py-2">
              <div className="text-left text-lg font-semibold pb-1 ">
                Promo code
              </div>
              <input
                type="text"
                class="border rounded-md px-4 py-3   focus:ring-outline-none focus:ring focus:ring-purple w-full"
              />
            </div>
          </div>

          <div className="text-center pt-20 font-semibold">
            TOTAL TO PAY: $ 0.00
          </div>

          <Button className="focus:outline-none text-white bg-gradient-to-r from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 px-4 focus:ring-purple-300 w-full text-lg rounded-lg font-lg my-2.5 py-2.5 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900">
            Proceed to the billing
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddFundModal;
