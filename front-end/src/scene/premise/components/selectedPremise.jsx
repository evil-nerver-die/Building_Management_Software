import React from 'react';
import './selectedPremise.css';
const SelectedPremise = prop => {
	return (
		<div className="container">
			<div className="name">Tên mặt bằng:</div>
			<div className="name-value">{prop.premise.name}</div>
			<div className="floor">Tầng:</div>
			<div className="floor-value">{prop.premise.floor}</div>
			<div className="num">Mã phòng:</div>
			<div className="num-value">{prop.premise.num}</div>
			<div className="area">Diện tích:</div>
			<div className="area-value">{prop.premise.area}</div>
			<div className="price">Giá:</div>
			<div className="price-value">{prop.premise.price}</div>
			<div className="des">Thông tin chi tiết:</div>
			<div className="des-value">{prop.premise.des}</div>
		</div>
	);
};

export default SelectedPremise;
