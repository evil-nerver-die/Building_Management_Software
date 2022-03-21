package com.bms.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Premises {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String premiseName;

    private Double area;

    private Integer floor;

    private Integer num;

    private Double price;

    private boolean status = false;

    private boolean disable = false;

    private String des;

    private String picture;

    public Premises(){

    }

    public Premises(String premiseName,
                    Double area,
                    Integer floor,
                    Integer num,
                    Double price,
                    boolean status,
                    boolean disable,
                    String des,
                    String picture){
        this.premiseName = premiseName;
        this.area = area;
        this.floor = floor;
        this.num = num;
        this.price = price;
        this.status = status;
        this.disable = disable;
        this.des = des;
        this.picture = picture;
    }

    public Integer getId() {
        return id;
    }

    public String getPremiseName() {
        return premiseName;
    }

    public void setPremiseName(String premiseName) {
        this.premiseName = premiseName;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Integer getNum() {
        return num;
    }
    public void setNum(Integer num) {
        this.num = num;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean isStatus() {
        return status;
    }

    public void setDisable(boolean disable) {
        this.disable = disable;
    }

    public boolean isDisable() {
        return disable;
    }
}
