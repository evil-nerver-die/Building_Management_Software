import React from 'react';
import './customService.css';
const ContractService = prop => {
	return (
		<div className="container">
			<div className="name">Tên dịch vụ:</div>
			<div className="name-value">{prop.service.name}</div>
			<div className="floor">Mã dịch vụ:</div>
			<div className="floor-value">{prop.service.code}</div>
			<div className="num">Giá tiền:</div>
			<div className="num-value">{prop.service.price}</div>
			<div className="price">Bên cung cấp:</div>
			<div className="price-value">{prop.service.provider}</div>
			<div className="des">Thông tin chi tiết:</div>
			<div className="des-value">{prop.service.des}</div>
		</div>
	);
};

export default ContractService;
