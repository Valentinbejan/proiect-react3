import React, { useState } from 'react';
import { Button, Form, Input, Space, Table, Tag } from "antd";

const initialData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["4325653"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["678548"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["3423437"],
  },
];

const Tabletest = () => {
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [form] = Form.useForm();

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const currentData = data[index];
    form.setFieldsValue({
      ...currentData,
      tags: currentData.tags.join(', ')
    });
  };

  const handleSave = () => {
    setData(prevData => prevData.map((item, index) => index === editIndex ? {
      ...form.getFieldsValue(),
      tags: form.getFieldValue('tags').split(',').map(tag => tag.trim())
    } : item));
    setEditIndex(null);
    form.resetFields();
  };


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Telefon",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "geekblue";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Actiune",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle">
          <a onClick={() => handleEdit(index)}>Edit</a>
          <a onClick={() => handleDelete(index)}>Delete</a>
        </Space>
      ),
    },
  ];

  const onFinish = (values) => {
    if (editIndex !== null) {
      handleSave();
    } else {
      setData(prevData => [
        ...prevData,
        {
          key: `${prevData.length + 1}`,
          name: values.name,
          age: values.age,
          address: values.address,
          tags: values.tags.split(',').map(tag => tag.trim()),
        },
      ]);

      form.resetFields();
    }
  };

  return (
    <div>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="age">
          <Input placeholder="Age" type="number" />
        </Form.Item>
        <Form.Item name="address">
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item name="tags">
          <Input placeholder="Telefon" type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">{editIndex !== null ? 'Save' : 'Adauga'}</Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Tabletest;
