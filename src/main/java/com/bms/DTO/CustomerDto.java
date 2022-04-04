package com.bms.DTO;

import com.bms.models.Customer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDto {
    private Integer Id;

    private String name;

    private String dob;

    private String phone;

    private String email;

    private boolean gender;



}
