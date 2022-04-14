package com.bms.models;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    private String name;

    private String dob;

    private String phone;

    private String email;

    private boolean gender;

    private String avatar;

    private boolean status;

    private String file;

    private String us_name;

    private String us_password;
}
