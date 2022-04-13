package com.bms.DTO;

import com.bms.models.Services;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServicesDto {
    private Integer id;

    private String name;

    private String code;

    private Double price;

    private String provider;
}
