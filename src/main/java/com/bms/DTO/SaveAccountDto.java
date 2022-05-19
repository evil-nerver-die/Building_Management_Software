package com.bms.DTO;

import com.bms.models.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;

@Getter
@Setter
public class SaveAccountDto {
    private Integer id;
    private String name;
    private String dob;
    private String email;
    private String phone;
    private Boolean gender;
    private String username;
    private String password;
    private Role roles;
    private Boolean locked = false;
    private Boolean enabled = false;
    private String additionalFile;
}
