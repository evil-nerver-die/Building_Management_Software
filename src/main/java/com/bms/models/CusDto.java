package com.bms.models;

import lombok.Getter;

@Getter
public class CusDto {
    Integer id;

    String name;

    String dob;

    String phone;

    String email;

    boolean gender;

    public CusDto(Customer customer) {
        this.id = customer.getCusId();
        this.name = customer.getCusName();
        this.dob = customer.getCusDob();
        this.phone = customer.getCusPhone();
        this.email = customer.getCusEmail();
        this.gender = customer.isCusGender();
    }


    public void loadFromEntity(Customer entity) {
        this.id = entity.getCusId();
        this.name = entity.getCusName();
        this.dob = entity.getCusDob();
        this.phone = entity.getCusPhone();
        this.email = entity.getCusEmail();
        this.gender = entity.isCusGender();
    }
}
