package com.bms.DTO;

import com.bms.models.Customer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDto {
    private Integer cusId;

    private String cusName;

    private String cusDob;

    private String cusPhone;

    private String cusEmail;

    private boolean cusGender;



}
