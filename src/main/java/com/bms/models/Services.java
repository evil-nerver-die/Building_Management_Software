package com.bms.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer serId;

    private String serName;

    private String serCode;

    private Double serPrice;

    private String serProvider;

    private boolean serStatus;

    private String serDes;

    private String serContractFile;

}
