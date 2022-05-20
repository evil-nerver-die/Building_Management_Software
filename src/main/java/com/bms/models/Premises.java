package com.bms.models;

import com.bms.DTO.PremisesDto;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

@Data
@Entity
public class Premises {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

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
