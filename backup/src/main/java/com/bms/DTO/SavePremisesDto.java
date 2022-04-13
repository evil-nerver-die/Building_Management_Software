package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SavePremisesDto {
    private Integer id;

    private String name;

    private Double area;

    private Integer floor;

    private Integer num;

    private Double price;

    private boolean status = false;

    private boolean disable = false;

    private String des;

    private String picture;
}
