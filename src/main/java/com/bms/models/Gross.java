package com.bms.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Gross {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gro_id;

    private Integer gro_income_id;

    private Integer gro_type;

    private Double gro_profit;

    private Integer con_id;

    public Gross(){

    }

    public Gross(Integer gro_id, Integer gro_income_id, Integer gro_type, Double gro_profit, Integer con_id) {
        this.gro_id = gro_id;
        this.gro_income_id = gro_income_id;
        this.gro_type = gro_type;
        this.gro_profit = gro_profit;
        this.con_id = con_id;
    }

    public Integer getGro_id() {
        return gro_id;
    }

    public void setGro_id(Integer gro_id) {
        this.gro_id = gro_id;
    }

    public Integer getGro_income_id() {
        return gro_income_id;
    }

    public void setGro_income_id(Integer gro_income_id) {
        this.gro_income_id = gro_income_id;
    }

    public Integer getGro_type() {
        return gro_type;
    }

    public void setGro_type(Integer gro_type) {
        this.gro_type = gro_type;
    }

    public Double getGro_profit() {
        return gro_profit;
    }

    public void setGro_profit(Double gro_profit) {
        this.gro_profit = gro_profit;
    }

    public Integer getCon_id() {
        return con_id;
    }

    public void setCon_id(Integer con_id) {
        this.con_id = con_id;
    }
}
