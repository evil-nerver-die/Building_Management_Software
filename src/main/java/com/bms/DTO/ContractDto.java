package com.bms.DTO;

import com.bms.models.Contract;
import lombok.Getter;

@Getter
public class ContractDto {
    String conName;

    String conCode;

    String conCreated;

    public ContractDto(Contract contract){
        this.conName = contract.getConName();
        this.conCode = contract.getConCode();
        this.conCreated = contract.getConCreated();
    }
}
