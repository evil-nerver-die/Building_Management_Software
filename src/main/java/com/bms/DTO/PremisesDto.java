package com.bms.DTO;

import com.bms.models.Customer;
import com.bms.models.Premises;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PremisesDto {
    private Integer premiseId;

     String name;

     Double area;

     Integer floor;

     Integer num;

     Double price;

     boolean status = false;

     String des;

     String picture;

//    public PremisesDto(Premises premise) {
//        this.name = premise.getPremiseName();
//        this.area = premise.getArea();
//        this.floor = premise.getPremiseFloor();
//        this.num = premise.getNum();
//        this.price = premise.getPrice();
//        this.status = premise.isStatus();
//        this.des = premise.getDes();
//        this.picture = premise.getPicture();
//    }


}
