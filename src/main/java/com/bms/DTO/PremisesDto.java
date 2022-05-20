package com.bms.DTO;

import com.bms.models.Customer;
import com.bms.models.Premises;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class PremisesDto {
  private Integer Id;

  private String name;

  private Double area;

  private String floor;

  private Integer num;

  private ArrayList<String> subscribedServices;

  private boolean status = false;

  private boolean disable = false;

  private Double price;

  private String des;

}
