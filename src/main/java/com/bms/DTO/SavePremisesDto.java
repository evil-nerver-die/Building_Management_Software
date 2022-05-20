package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class SavePremisesDto {
    private Integer id;

    private String name;

    private Double area;

    private String floor;

    private Integer num;

    private Double price;

    private ArrayList<String> subscribedServices;

    private boolean status = false;

    private boolean disable = false;

    private String des;

    private String picture;
}
