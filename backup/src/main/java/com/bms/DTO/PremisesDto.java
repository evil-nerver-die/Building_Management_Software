package com.bms.DTO;

import com.bms.models.Customer;
import com.bms.models.Premises;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PremisesDto {
  private Integer Id;

  private String name;

  private Double area;

  private Integer floor;

  private Integer num;

  private boolean status = false;

  private boolean disable = false;

  private Double price;

  private String des;

}
