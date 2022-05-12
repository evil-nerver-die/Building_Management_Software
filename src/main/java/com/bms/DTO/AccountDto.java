package com.bms.DTO;

import com.bms.models.Role;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class AccountDto {
    private Integer id;
    private String name;
    private LocalDate dob;
    private String email;
    private String phone;
    private Boolean gender;
    private String username;
    private Role roles;
    private Boolean locked = false;
    private Boolean enabled = false;
    private String additionalFile;
}
