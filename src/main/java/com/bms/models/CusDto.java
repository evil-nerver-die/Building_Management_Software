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





    public void loadFromEntity(Customer entity) {
        this.id = entity.getCusId();
        this.name = entity.getCusName();
        this.dob = entity.getCusDob();
        this.phone = entity.getCusPhone();
        this.email = entity.getCusEmail();
        this.gender = entity.isCusGender();
    }
}
