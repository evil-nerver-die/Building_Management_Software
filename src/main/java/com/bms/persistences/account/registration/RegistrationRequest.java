package com.bms.persistences.account.registration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String name;
    private String dob;
    private String email;
    private String phone;
    private Boolean gender;
    private String username;
    private String password;
    private String additionalFile;
}
