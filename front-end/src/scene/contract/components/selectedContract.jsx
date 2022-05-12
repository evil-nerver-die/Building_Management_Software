import React from 'react';
import { stores } from '../../../store/storeInitializer';
import './selectedContract.css';

let data = {};

export default class SelectedContract extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isLoad: false
        };
    }

    async componentDidMount() {
        await this.getContractById();
        data = stores.contractStore.contractSelected;
        this.setState({ isLoad: !this.state.isLoad });
    }

    async componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            await this.getContractById();
            data = stores.contractStore.contractSelected;
            this.setState({ isLoad: !this.state.isLoad});
        }
    }

    getContractById = async () => {
        await stores.contractStore.getById(this.props.id);
    };

    render() {
        return (
            <div className="container">
                <div className="name">Tên hợp đồng:</div>
                <div className="name-value">{data.name}</div>
                <div className="code">Code:</div>
                <div className="code-value">{data.code}</div>
                <div className="dateCreated">Ngày tạo:</div>
                <div className="dateCreated-value">{data.dateCreated}</div>
                
            </div>
        );
    }
}