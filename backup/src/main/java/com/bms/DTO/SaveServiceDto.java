package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveServiceDto {
    private Integer id;

    private String name;

    private String code;

    private Double price;

    private String provider;

    private boolean status;

    private String des;
}
