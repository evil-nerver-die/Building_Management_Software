package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveContractDto {
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
}
