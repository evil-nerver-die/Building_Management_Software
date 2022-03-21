package com.bms.models;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Customer {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cus_id;

    private String cusName;

    private String cus_dob;

    private String cus_phone;

    private String cus_email;

    private boolean cus_gender;

    private Integer cus_role;

    private Integer cus_us_id;

    private String cus_avatar;

    private String cus_des;

    private boolean cus_status;

    private String cus_file;




}
