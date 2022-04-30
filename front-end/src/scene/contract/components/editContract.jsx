import React from 'react';
import {Form, Input} from 'antd';
import './selectedContract.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class EditContract extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false
		};
	}

	data = stores.contractStore.contractSelected;

	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.data = stores.contractStore.contractSelected;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	onFinish = value => {
		console.log(value);
	};

	render() {
		return(
			<div>
				<Form
					onFinish={this.onFinish}
					initialValues={{
						name: this.data.name,
						code: this.data.code,
						ended: this.data.ended,
						provider: this.data.provider,
						des: this.data.des
					}}
				>
					<Form.Item name="name" label="Tên hợp đồng">
						<Input />
					</Form.Item>
					<Form.Item name="code" label="Code">
						<Input />
					</Form.Item>
					<Form.Item name="dateEnd" label="Ngày hết hạn">
						<Input />
					</Form.Item>
					<Form.Item name="provider" label="Nhà cung cấp">
						<Input />
					</Form.Item>
					<Form.Item name="des" label="Thông tin chi tiết:">
						<TextArea rows={4} />
					</Form.Item>
				</Form>
			</div>
		);
	}
}