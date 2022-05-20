package com.bms.DTO;

import com.bms.models.Contract;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContractDto {
    private Integer Id;

    String name;

    String des;

    String code;

    Integer type;

    Double price;

    String provider;

    String Signed;

    String dateCreated;

    String dateEnded;

//    public ContractDto(Contract contract){
//        this.conName = contract.getConName();
//        this.conCode = contract.getConCode();
//        this.conCreated = contract.getConCreated();
//    }
}
