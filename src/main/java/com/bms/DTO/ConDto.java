package com.bms.DTO;

import com.bms.models.Contract;
import lombok.Getter;

@Getter
public class ConDto {
    String conName;

    String conCode;

    String conCreated;

    public ConDto(Contract contract){
        this.conName = contract.getConName();
        this.conCode = contract.getConCode();
        this.conCreated = contract.getConCreated();
    }
}
