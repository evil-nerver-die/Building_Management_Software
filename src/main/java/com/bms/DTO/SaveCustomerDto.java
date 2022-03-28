package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveCustomerDto {
    private Integer cusId;

    private String cusName;

    private String cusDob;

    private String cusPhone;

    private String cusEmail;

    private boolean cusGender;

    private Integer cusRole;

    private Integer cusUsId;

    private String cusAvatar;

    private String cusDes;

    private boolean cusStatus;

    private String cusFile;
}
