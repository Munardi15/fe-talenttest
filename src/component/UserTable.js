import React from "react";
import { Table, Button, Space, Modal } from "antd";
import { Link } from 'react-router-dom';

const { confirm } = Modal;

const UserTable = ({ users, handleFindById, handleUpdate, handleDelete }) => {
  const columns = [
    { title: "Nama", dataIndex: "userName", key: "userName" },
    { title: "Nomor Akun", dataIndex: "accountNumber", key: "accountNumber" },
    { title: "Email", dataIndex: "emailAddress", key: "emailAddress" },
    { title: "Nomor Telepon", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Jenis Kelamin", dataIndex: "gender", key: "gender" },
    {
      title: "Status Pekerjaan",
      dataIndex: "employmentStatus",
      key: "employmentStatus",
    },
    { title: "Posisi", dataIndex: "position", key: "position" },
    {
      title: "Aksi",
      key: "action",
      align: "center",
      render: (text, record) => (
        <Space size="small">
          <Link to={`/Detail/${record._id}`}>
            <Button type="primary">Detail</Button>
          </Link>
          <Button type="default" onClick={() => handleUpdate(record._id)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => showDeleteConfirm(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const showDeleteConfirm = (userId) => {
    confirm({
      title: "Apakah Anda yakin ingin menghapus pengguna ini?",
      okText: "Ya",
      okType: "danger",
      cancelText: "Tidak",
      onOk() {
        handleDelete(userId);
      },
    });
  };

  return <Table dataSource={users} columns={columns} rowKey="_id" />;
};

export default UserTable;
