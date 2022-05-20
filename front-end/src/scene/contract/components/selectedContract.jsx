import { Alert, Button, Popconfirm } from 'antd';
import React from 'react';
import { stores } from '../../../store/storeInitializer';
import './selectedContract.css';

let data = {};

export default class SelectedContract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false
        };
    }

    async componentDidMount() {
        this.setState({ isLoad: !this.state.isLoad });
    }

    handleEdit = () => {
        this.props.okClick();
    };

    handleDelete = () => {
        this.props.closeClick();
    };

    render() {
        return (
            <React.Fragment>
                <div className="pre-form-container">
                    <div className="name">Tên hợp đồng:</div>
                    <div className="name-value">{this.props.data.name}</div>
                    <div className="code">Code:</div>
                    <div className="code-value">{this.props.data.code}</div>
                    <div className="type">Loại hợp đồng:</div>
                    <div className="type-value">{this.props.data.type === 0 ? 'Mặt bằng':'Dịch vụ'}</div>
                    <div className="provider">Nhà cung cấp:</div>
                    <div className="provider-value">{this.props.data.provider}</div>
                    <div className="signed">Người ký:</div>
                    <div className="signed-value">{this.props.data.signed}</div>
                    <div className="dateCreated">Ngày tạo:</div>
                    <div className="dateCreated-value">{this.props.data.dateCreated}</div>
                    <div className="dateEnded">Ngày tạo:</div>
                    <div className="dateEnded-value">{this.props.data.dateEnded}</div>
                    <div className="des">Thông tin:</div>
                    <div className="des-value">{this.props.data.des}</div>
                    
                </div>
                <div className="button-container">
                    <div className="edit-pre-butt">
                        <Button onClick={this.handleEdit} type={'primary'} style={{ width: '90px' }}>
							Sửa
						</Button>
                    </div>
                    <div className="del-pre-butt">
						<Popconfirm placement="top" title={'Hủy hợp đồng này?'} onConfirm={this.handleDelete} okText="Xác nhận" cancelText="Hủy">
							<Button type={'primary'} danger style={{ width: '120px' }}>
								Hủy hợp đồng
							</Button>
						</Popconfirm>
					</div>
                </div>
            </React.Fragment>
            
        );
    }
}