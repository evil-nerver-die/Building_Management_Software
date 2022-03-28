package com.bms.models;

import com.bms.DTO.ConDto;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Data
@Entity
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String conName;

    private String conCode;

    private Double conPrice;

    private String conProvider;

    private Integer conStatus;

    private Integer conType;

    private String conCreated;

    private String conSigned;

    private String conUpdated;

    private String conEnded;

    private Integer usIdSigned;

    private String conDes;

    private String conFile;

    private Integer usIdCreated;

    public void loadFromDto(ConDto dto){
        this.conName = dto.getConName();
        this.conCode = dto.getConCode();
        this.conCreated = dto.getConCreated();
    }
}
