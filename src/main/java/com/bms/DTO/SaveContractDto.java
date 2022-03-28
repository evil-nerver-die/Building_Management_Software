package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveContractDto {
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
}
