package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveServiceDto {
    private Integer serId;

    private String serName;

    private String serCode;

    private Double serPrice;

    private String serProvider;

    private boolean serStatus;

    private String serDes;

    private String serContractFile;
}
