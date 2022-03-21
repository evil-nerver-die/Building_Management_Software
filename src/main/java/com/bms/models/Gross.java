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
public class Gross {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gro_id;

    private Integer gro_income_id;

    private Integer gro_type;

    private Double gro_profit;

    private Integer con_id;


}
