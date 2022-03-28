package com.bms.DTO;

import com.bms.models.Customer;
import com.bms.models.Premises;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PremisesDto {
  private Integer premiseId;

  private String premiseName;

  private Double area;

  private Integer premiseFloor;

  private Integer num;

  private Double price;

  private String des;

}
