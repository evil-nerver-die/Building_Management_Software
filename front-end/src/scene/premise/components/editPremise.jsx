import { Form, Input, InputNumber } from 'antd';
import React from 'react';
import './selectedPremise.css';

const { TextArea } = Input;

const EditPremise = prop => {
	const [form] = Form.useForm();
	const onFinish = value => {
		console.log(value);
	};
	return (
		<div>
			<Form form={form} onFinish={onFinish}>
				<Form.Item name="name" label="Tên mặt bằng:">
					<Input defaultValue={prop.premise.name} />
				</Form.Item>
				<Form.Item name="floor" label="Tầng:">
					<InputNumber defaultValue={prop.premise.floor} />
				</Form.Item>
				<Form.Item name="num" label="Mã phòng:">
					<InputNumber defaultValue={prop.premise.num} />
				</Form.Item>
				<Form.Item name="area" label="Diện tích:">
					<InputNumber defaultValue={prop.premise.area} />
				</Form.Item>
				<Form.Item name="price" label="Giá:">
					<InputNumber defaultValue={prop.premise.price} />
				</Form.Item>
				<Form.Item name="des" label="Thông tin chi tiết:">
					<TextArea rows={4} defaultValue={prop.premise.des} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditPremise;
