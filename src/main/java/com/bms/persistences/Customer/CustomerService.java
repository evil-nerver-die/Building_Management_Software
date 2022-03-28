package com.bms.persistences.Customer;

import com.bms.models.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CustomerService {
    List<Customer> findByCusNameContaining(String cusName);

    List<Customer> findByCusPhoneContaining(String cusPhone);

    List<Customer> findByCusEmailContaining(String cusEmail);

    List<Customer> findAll();

    Customer save(Customer customer);

    void deleteByID(Integer cusId);


}
