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
                    <div className="name-value">{data.name}</div>
                    <div className="code">Code:</div>
                    <div className="code-value">{data.code}</div>
                    <div className="dateCreated">Ngày tạo:</div>
                    <div className="dateCreated-value">{data.dateCreated}</div>
                    <div className="des">Thông tin:</div>
                    <div className="des-value">{data.des}</div>
                    
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