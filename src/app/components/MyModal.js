import { Button, Modal, Radio } from "antd";
import React, { useState } from "react";
import Filter from "./Filter";

export default function MyModal({ isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Filter />
      </Modal>
    </div>
  );
}
