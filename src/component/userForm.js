import React from "react";
import { Modal, Form, Input, Select } from "antd";
// import moment from 'moment';

const { Option } = Select;

const UserForm = ({ visible, onCancel, onFinish, initialValues }) => {
  console.log("ini visible => ", visible);
  console.log("ini onCancel => ", onCancel);
  console.log("ini onFinish => ", onFinish);
  console.log("ini initialValues => ", initialValues);
  const [form] = Form.useForm();

  return (
    <Modal
      title={initialValues ? "Perbarui Pengguna" : "Tambah Pengguna"}
      open={visible}
      onOk={form.submit}
      onCancel={onCancel}
    >
      <Form form={form} onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          name="userName"
          label="Nama"
          rules={[{ required: true, message: "Nama wajib diisi!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="accountNumber"
          label="Nomor Akun"
          rules={[{ required: true, message: "Nomor Akun wajib diisi!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="emailAddress"
          label="Email"
          rules={[{ required: true, message: "Email wajib diisi!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Nomor Telepon"
          rules={[{ required: true, message: "Nomor Telepon wajib diisi!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Jenis Kelamin"
          rules={[{ required: true, message: "Jenis Kelamin wajib diisi!" }]}
        >
          <Select>
            <Option value="L">Laki-laki</Option>
            <Option value="P">Perempuan</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="employmentStatus"
          label="Status Pekerjaan"
          rules={[{ required: true, message: "Status Pekerjaan wajib diisi!" }]}
        >
          <Select>
            <Option value="Active">Active</Option>
            <Option value="Non Active">Non Active</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="position"
          label="Posisi"
          rules={[{ required: true, message: "Posisi wajib diisi!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
