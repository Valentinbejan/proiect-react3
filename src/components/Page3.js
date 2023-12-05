import { Button, Card, Form, Input, Modal, Table, Typography } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useState } from "react";

const data = [
    { id: 1, nume: 'John Doe', varsta: 25 },
    { id: 2, nume: 'Jane Smith', varsta: 30 },
    { id: 3, nume: 'Alex Johnson', varsta: 28 },
];

const Page3 = () => {
    let [open, setOpen] = useState(false);
    let [allData, setAllData] = useState(data);
    let [openSecond, setOpenSecond] = useState(false);

    const handleOpenModal = () => {
        console.log("ai apela  modal")
        setOpen(!open);
    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Nume', dataIndex: 'nume', key: 'nume' },
        { title: 'Vârsta', dataIndex: 'varsta', key: 'varsta' },
    ];

    const dataSource = allData.map((data, index) => {
        return {
            key: index,
            id: data.id,
            nume: data.nume,
            varsta: data.varsta
        };
    });

    const onFinish = (values) => {
        console.log('Success:', values);
        setAllData([...allData, values]);
    };

    return (
        <div>
            <Button type="primary" onClick={handleOpenModal}>
                Deschide modal cu tabel
            </Button>
            <Modal open={open} onCancel={handleOpenModal}>
                <Table dataSource={dataSource} columns={columns} />

                <Card>
                    <Typography>
                        Utilizator nou
                    </Typography>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="ID"
                            name="id"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Nume"
                            name="nume"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Varsta"
                            name="varsta"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </div>
    );
};

export default Page3;