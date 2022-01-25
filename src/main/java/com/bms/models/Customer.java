package com.bms.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cus_id;

    private String cus_name;

    private String cus_dob;

    private String cus_phone;

    private String cus_email;

    private boolean cus_gender;

    private Integer cus_role;

    private Integer cus_us_id;

    private String cus_avatar;

    private String cus_des;

    private boolean cus_status;

    private String cus_file;




    public Customer(){

    }

    public Customer(Integer cus_id, String cus_name, String cus_dob, String cus_phone, String cus_email, boolean cus_gender, Integer cus_role, Integer cus_us_id, String cus_avatar, String cus_des, boolean cus_status, String cus_file) {
        this.cus_id = cus_id;
        this.cus_name = cus_name;
        this.cus_dob = cus_dob;
        this.cus_phone = cus_phone;
        this.cus_email = cus_email;
        this.cus_gender = cus_gender;
        this.cus_role = cus_role;
        this.cus_us_id = cus_us_id;
        this.cus_avatar = cus_avatar;
        this.cus_des = cus_des;
        this.cus_status = cus_status;
        this.cus_file = cus_file;
    }

    public Integer getCus_id() {
        return cus_id;
    }

    public void setCus_id(Integer cus_id) {
        this.cus_id = cus_id;
    }

    public String getCus_name() {
        return cus_name;
    }

    public void setCus_name(String cus_name) {
        this.cus_name = cus_name;
    }

    public String getCus_dob() {
        return cus_dob;
    }

    public void setCus_dob(String cus_dob) {
        this.cus_dob = cus_dob;
    }

    public String getCus_phone() {
        return cus_phone;
    }

    public void setCus_phone(String cus_phone) {
        this.cus_phone = cus_phone;
    }

    public String getCus_email() {
        return cus_email;
    }

    public void setCus_email(String cus_email) {
        this.cus_email = cus_email;
    }

    public boolean isCus_gender() {
        return cus_gender;
    }

    public void setCus_gender(boolean cus_gender) {
        this.cus_gender = cus_gender;
    }

    public Integer getCus_role() {
        return cus_role;
    }

    public void setCus_role(Integer cus_role) {
        this.cus_role = cus_role;
    }

    public Integer getCus_us_id() {
        return cus_us_id;
    }

    public void setCus_us_id(Integer cus_us_id) {
        this.cus_us_id = cus_us_id;
    }

    public String getCus_avatar() {
        return cus_avatar;
    }

    public void setCus_avatar(String cus_avatar) {
        this.cus_avatar = cus_avatar;
    }

    public String getCus_des() {
        return cus_des;
    }

    public void setCus_des(String cus_des) {
        this.cus_des = cus_des;
    }

    public boolean isCus_status() {
        return cus_status;
    }

    public void setCus_status(boolean cus_status) {
        this.cus_status = cus_status;
    }

    public String getCus_file() {
        return cus_file;
    }

    public void setCus_file(String cus_file) {
        this.cus_file = cus_file;
    }
}
