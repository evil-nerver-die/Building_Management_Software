package com.bms.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangePasswordDto {
    private Integer id;
    private String oldPassword;
    private String newPassword;
}
