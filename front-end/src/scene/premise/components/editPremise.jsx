import { Form, Input, InputNumber } from 'antd';
import React from 'react';
import './index.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;
export default class EditPremise extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isLoad: false
		};
	}

	data = stores.premiseStore.premiseSelected;

	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.data = stores.premiseStore.premiseSelected;
			this.setState({ isLoad: !this.state.isLoad });
		}
	}

	onFinish = value => {
		console.log(value);
	};

	render() {
		return (
			<div>
				<Form
					onFinish={this.onFinish}
					initialValues={{
						name: this.data.name,
						floor: this.data.floor,
						num: this.data.num,
						area: this.data.area,
						price: this.data.price,
						des: this.data.des
					}}
				>
					<Form.Item name="name" label="Tên mặt bằng:">
						<Input />
					</Form.Item>
					<Form.Item name="floor" label="Tầng:">
						<Input />
					</Form.Item>
					<Form.Item name="num" label="Mã phòng:">
						<InputNumber className="premise-inputnumber" min={1} />
					</Form.Item>
					<Form.Item name="area" label="Diện tích:">
						<InputNumber className="premise-inputnumber" min={0} />
					</Form.Item>
					<Form.Item name="price" label="Giá:">
						<InputNumber className="premise-inputnumber" min={0} />
					</Form.Item>
					<Form.Item name="des" label="Thông tin chi tiết:">
						<TextArea rows={4} />
					</Form.Item>
				</Form>
			</div>
		);
	}
}
