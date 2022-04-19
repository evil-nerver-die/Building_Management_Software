import React from 'react';
import './modalEmployee.css';
const InforEmployee = prop => {
	return (
		<div className="container">
			<div className="name">Tên nhân viên:</div>
			<div className="name-value">{prop.employee.name}</div>
			<div className="floor">Tuổi:</div>
			<div className="floor-value">{prop.employee.dob}</div>
			<div className="area">Giới tính:</div>
			<div className="area-value">{prop.employee.gender === true ? 'Nam' : 'Nữ'}</div>
			<div className="num">Email:</div>
			<div className="num-value">{prop.employee.email}</div>
			<div className="price">Điện thoại:</div>
			<div className="price-value">{prop.employee.phone}</div>
			<div className="des">Thông tin chi tiết:</div>
			<div className="des-value">{prop.employee.des}</div>
		</div>
	);
};

export default InforEmployee;
