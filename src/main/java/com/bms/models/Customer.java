package com.bms.models;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Customer {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cusId;

    private String cusName;

    private String cusDob;

    private String cusPhone;

    private String cusEmail;

    private boolean cusGender;

    private Integer cusRole;

    private Integer cusUsId;

    private String cusAvatar;

    private String cusDes;

    private boolean cusStatus;

    private String cusFile;

    public void loadFromDto(CusDto dto) {
        this.cusId = dto.getId();
        this.cusName = dto.getName();
        this.cusDob = dto.getDob();
        this.cusPhone = dto.getPhone();
        this.cusEmail = dto.getEmail();
        this.cusGender = dto.isGender();
    }




}
