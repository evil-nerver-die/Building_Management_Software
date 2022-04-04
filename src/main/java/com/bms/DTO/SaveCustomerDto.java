package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveCustomerDto {
    private Integer Id;

    private String name;

    private String dob;

    private String phone;

    private String email;

    private boolean gender;

    private Integer role;

    private Integer UsId;

    private String avatar;

    private String des;

    private boolean status;

    private String file;
}
