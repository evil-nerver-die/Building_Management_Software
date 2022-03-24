package com.bms.DTO;

import com.bms.models.Customer;
import lombok.Getter;

@Getter
public class CusDto {
    String name;

    String dob;

    String phone;

    String email;

    boolean gender;

    String avatar;

    public CusDto(Customer customer) {
        this.name = customer.getCusName();
        this.dob = customer.getCusDob();
        this.phone = customer.getCusPhone();
        this.email = customer.getCusEmail();
        this.gender = customer.isCusGender();
        this.avatar = customer.getCusAvatar();
    }


}