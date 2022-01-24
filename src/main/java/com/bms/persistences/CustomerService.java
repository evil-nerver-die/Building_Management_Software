package com.bms.persistences;

import com.bms.models.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CustomerService {
    List<Customer> getByCustomerNameContaining(String name);

    Iterable<Customer> findAll();

    Customer save(Customer customer);

    void deleteByID(Integer id);


}
