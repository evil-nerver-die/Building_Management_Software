package com.bms.models;


import com.bms.DTO.CustomerDto;
import lombok.Data;

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
}
