import React from 'react';
import { Row, Col, Image } from 'antd';
import './footer.css';

export default class AppFooter extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<Row justify="space-between">
						<Col span={5}>
							<img src={require('./logo.png')}></img>
						</Col>
						<Col span={11}>
							<label className="label1">THÔNG TIN TÒA NHÀ</label>
							<Row>
								<label>Tòa nhà Đức béo</label>
							</Row>
							<Row>
								<label>Cho thuê văn phòng toà nhà tiêu chuẩn 5 tầng nổi, hiện đại, độc lập.</label>
							</Row>
							<Row>
								<label>Cung cấp các dịch vụ cao cấp như lắp đặt, sửa chữa, cung cấp với chất lượng tuyệt vời</label>
							</Row>
							<Row>
								<label>Địa chỉ: số 10B phố Hoàng Văn Thái, Thanh Xuân, Hà Nội</label>
							</Row>
							<Row>
								<label>Liên hệ: 0962694093 (anh Đức béo)</label>
							</Row>
						</Col>
						<Col span={8}>
							<label className="label1">THÔNG TIN NGƯỜI PHÁT TRIỂN</label>
							<Row>
								<label>Tạ Quang Đức</label>	
							</Row>
							<Row>
								<label>Liên hệ: fb.com/duc.ta.14473</label>
							</Row>
							<Row>
								<label>SĐT: 0962694093</label>
							</Row>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
