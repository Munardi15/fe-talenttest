import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import UserForm from "../component/userForm";
import UserTable from "../component/UserTable";
import { Link } from 'react-router-dom';
import moment from "moment";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = (userId) => {
    const selectedUser = users.find((user) => user._id === userId);
    console.log("ini selected =>", selectedUser);
    if (selectedUser) {
      setSelectedUser(selectedUser);
      setIsEdit(true);
      setEditingUserId(userId);
      setIsModalVisible(true);
    } else {
      console.error("User with userId:", userId, "not found");
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddOrUpdateUser = async (values) => {
    try {
      if (isEdit) {
        await axios.put(
          `http://localhost:3000/api/users/${editingUserId}`,
          values
        );
      } else {
        await axios.post("http://localhost:3000/api/users", values);
      }
      setIsModalVisible(false);
      fetchData();
    } catch (error) {
      console.error("Error adding/updating user:", error);
    }
  };

  const showDeleteConfirm = (userId) => {
    // Same implementation as before
  };

  const showModal = () => {
    setIsModalVisible(true);
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEdit(false);
    setEditingUserId(null);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    handleAddOrUpdateUser(values);
  };
  const handleFindById = (userId) => {
    // Implementasi logika untuk menampilkan detail pengguna berdasarkan ID
    console.log(`Menampilkan detail pengguna dengan ID: ${userId}`);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">
        <h1 style={{ textAlign: "center" }}>Daftar Pengguna</h1>
      </Link>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Tambah Pengguna
        </Button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <UserTable
          users={users}
          handleFindById={handleFindById}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
      <UserForm
        visible={isModalVisible}
        onCancel={handleCancel}
        onFinish={onFinish}
        initialValues={isEdit ? selectedUser : null}
      />
    </div>
  );
};

export default Home;
