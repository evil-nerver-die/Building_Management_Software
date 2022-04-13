package com.bms.persistences.Customer;

import com.bms.models.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CustomerService {
    List<Customer> findByNameContaining(String cusName);

    List<Customer> findByPhoneContaining(String cusPhone);

    List<Customer> findByEmailContaining(String cusEmail);

    List<Customer> findAll();

    Customer save(Customer customer);

    void deleteByID(Integer cusId);

    Customer getById(Integer id);


}
