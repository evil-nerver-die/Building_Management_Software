import React from 'react';
import {Form, Input} from 'antd';
import './selectedContract.css';

const { TextArea } = Input;

const EditContract = prop => {
	const [form] = Form.useForm();
	const onFinish = value => {
		console.log(value);
	};
	return (
		<div>
			<Form form={form} onFinish={onFinish}>
				<Form.Item name="name" label="Contract's name">
					<Input defaultValue={prop.name}/>
				</Form.Item>
				<Form.Item name="code" label="Code">
					<Input defaultValue={prop.code}/>
				</Form.Item>
				<Form.Item name="dateEnd" label="Date Ended">
					<Input defaultValue={prop.dateEnd}/>
				</Form.Item>
				<Form.Item name="provider" label="Provide">
					<Input defaultValue={prop.provider}/>
				</Form.Item>
				<Form.Item name="des" label="Description:">
					<TextArea rows={4} defaultValue={prop.des} />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditContract;