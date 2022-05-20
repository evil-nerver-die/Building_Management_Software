import { Button, Form, Input, InputNumber, Radio } from 'antd';
import React from 'react';
import './selectedContract.css';
import { stores } from '../../../store/storeInitializer';

const { TextArea } = Input;

export default class CreateContract extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			isLoad: false,
			value: 0
		};
	}

    formRef = React.createRef();

    async componentDidMount() {
		this.setState({ isLoad: !this.state.isLoad });
	}

	async createContract(data) {
		await stores.contractStore.createUpdate(data);
	}

	onChange = e =>{
		this.setState({
			value: e.target.value,
		})
	}
    onFinish = async value => {
		let temp = {
			status: true
		};
		let data = Object.assign(value, temp);
		await this.createContract(data);
		this.handleEdit();
	};

	handleEdit = () => {
		this.props.okClick();
	};

	handleClose = () => {
		this.props.cancelClick();
		this.formRef.current.resetFields();
	};

    render() {
        return(
            <div>
                <Form
					onFinish={this.onFinish}
					ref={this.formRef}
					name={'create-contract'}
				>
					<Form.Item name="name" label="Tên hợp đồng:">
						<Input />
					</Form.Item>
					<Form.Item name="code" label="Code:">
						<Input />
					</Form.Item>
					<Form.Item name="price" label="Giá:">
						<InputNumber min={0} />
					</Form.Item>
					<Form.Item name="type" label="Loại hợp đồng:" >
						<Radio.Group onChange={this.onChange}>
							<Radio value={0}>Mặt bằng</Radio>
							<Radio value={1}>Dịch vụ</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item name="dateCreated" label="Ngày tạo hợp đồng:">
						<Input />
					</Form.Item>
					<Form.Item name="dateEnded" label="Ngày hết hạn:">
						<Input />
					</Form.Item>
					<Form.Item name="provider" label="Nhà cung cấp:">
						<Input />
					</Form.Item>
					<Form.Item name="signed" label="Người ký:">
						<Input />
					</Form.Item>
					<Form.Item name="des" label="Thông tin chi tiết:">
						<TextArea rows={4} />
					</Form.Item>
					<Form.Item>
						<div className="button-container">
							<div className="edit-pre-butt">
								<Button htmlType="submit" onClick={this.handleEdit} type={'primary'} style={{ width: '90px' }}>
									Xác nhận
								</Button>
							</div>
							<div className="del-pre-butt">
								<Button htmlType="button" onClick={this.handleClose} style={{ width: '90px' }}>
									Hủy
								</Button>
							</div>
						</div>
					</Form.Item>
				</Form>
            </div>
        )
    }
}
