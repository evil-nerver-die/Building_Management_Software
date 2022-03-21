package com.bms.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ser_id;

    private String ser_name;

    private String ser_code;

    private Double ser_price;

    private String ser_provider;

    private boolean ser_status;

    private String ser_des;

    private String ser_contract_file;

    public Services(Integer ser_id,
                    String ser_name,
                    String ser_code,
                    Double ser_price,
                    String ser_provider,
                    boolean ser_status,
                    String ser_des,
                    String ser_contract_file) {
        this.ser_id = ser_id;
        this.ser_name = ser_name;
        this.ser_code = ser_code;
        this.ser_price = ser_price;
        this.ser_provider = ser_provider;
        this.ser_status = ser_status;
        this.ser_des = ser_des;
        this.ser_contract_file = ser_contract_file;
    }

    public Services() {

    }

    public Integer getSer_id() {
        return ser_id;
    }

    public void setSer_id(Integer ser_id) {
        this.ser_id = ser_id;
    }

    public String getSer_name() {
        return ser_name;
    }

    public void setSer_name(String ser_name) {
        this.ser_name = ser_name;
    }

    public String getSer_code() {
        return ser_code;
    }

    public void setSer_code(String ser_code) {
        this.ser_code = ser_code;
    }

    public Double getSer_price() {
        return ser_price;
    }

    public void setSer_price(Double ser_price) {
        this.ser_price = ser_price;
    }

    public String getSer_provider() {
        return ser_provider;
    }

    public void setSer_provider(String ser_provider) {
        this.ser_provider = ser_provider;
    }

    public boolean isSer_status() {
        return ser_status;
    }

    public void setSer_status(boolean ser_status) {
        this.ser_status = ser_status;
    }

    public String getSer_des() {
        return ser_des;
    }

    public void setSer_des(String ser_des) {
        this.ser_des = ser_des;
    }

    public String getSer_contract_file() {
        return ser_contract_file;
    }

    public void setSer_contract_file(String ser_contract_file) {
        this.ser_contract_file = ser_contract_file;
    }
}
