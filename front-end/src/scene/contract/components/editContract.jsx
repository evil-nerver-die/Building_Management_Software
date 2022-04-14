import React from 'react';
import './selectedContract.css';
const editContract = prop => {
	return (
		<div className="container">
			<div className="name">Contract's name:</div>
			<div className="name-value">{prop.contract.name}</div>
			<div className="code">Code:</div>
			<div className="code-value">{prop.contract.code}</div>
			<div className="dateEnd">Date Ended:</div>
			<div className="ended-value">{prop.contract.dateEnd}</div>
			<div className="provider">Provider:</div>
			<div className="provider-value">{prop.contract.provider}</div>
			<div className="des">Description:</div>
			<div className="des-value">{prop.contract.des}</div>
		</div>
	);
};

export default editContract;