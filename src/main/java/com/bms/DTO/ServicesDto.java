package com.bms.DTO;

import com.bms.models.Services;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServicesDto {
    private Integer id;

    private String serName;

    private String serCode;

    private Double serPrice;

    private String serProvider;
}
