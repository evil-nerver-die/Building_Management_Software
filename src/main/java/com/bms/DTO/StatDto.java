package com.bms.DTO;

import lombok.Data;

@Data
public class StatDto {
        int userCount;
    int premiseCount;
    int rentedPremises;
    int availablePremises;
    int disabledPremises;


    public StatDto(int size, int size1, int rentedCount, int availableCount, int disabledCount) {
        this.userCount = size;
        this.premiseCount = size1;
        this.rentedPremises = rentedCount;
        this.availablePremises = availableCount;
        this.disabledPremises = disabledCount;
    }
}
