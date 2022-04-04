package com.bms.models;

import com.bms.DTO.ContractDto;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
@Data
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    private String name;

    private String code;

    private Double price;

    private String provider;

    private Integer status;

    private Integer type;

    private String dateCreated;

    private String Signed;

    private String Updated;

    private String Ended;

    private Integer usIdSigned;

    private String Des;

    private String File;

    private Integer usIdCreated;

//    public void loadFromDto(ContractDto dto){
//        this.Name = dto.getConName();
//        this.Code = dto.getConCode();
//        this.Created = dto.getConCreated();
//    }
}
