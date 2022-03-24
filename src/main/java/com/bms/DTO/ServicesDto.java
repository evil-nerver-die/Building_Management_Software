package com.bms.DTO;

import com.bms.models.Services;
import lombok.Getter;

@Getter
public class ServicesDto {
     String Name;
     String Code;
     Double Price;
     String Provider;

    public ServicesDto(Services service) {
        this.Name = service.getSerName();
        this.Code = service.getSerCode();
        this.Price = service.getSerPrice();
        this.Provider = service.getSerProvider();
    }


}
