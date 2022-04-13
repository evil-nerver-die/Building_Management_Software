import React from 'react';
import './selectedContract.css';
const selectedContract = prop => {
	return (
		<div className="container">
			<div className="name">Contract's name:</div>
			<div className="name-value">{prop.contract.name}</div>
			<div className="code">Code:</div>
			<div className="code-value">{prop.contract.code}</div>
			<div className="dateCreated">Date Created:</div>
			<div className="created-value">{prop.contract.dateCreated}</div>
			<div className="">Diện tích:</div>
			<div className="area-value">{prop.contract.area}</div>
			<div className="des">Thông tin chi tiết:</div>
			<div className="des-value">{prop.contract.des}</div>
		</div>
	);
};

export default selectedContract;