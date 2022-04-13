package com.bms.models;


import com.bms.DTO.CustomerDto;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Customer {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    private String name;

    private String dob;

    private String phone;

    private String email;

    private boolean gender;

    private Integer role;

    private Integer usId;

    private String avatar;

    private String des;

    private boolean status;

    private String file;
}
