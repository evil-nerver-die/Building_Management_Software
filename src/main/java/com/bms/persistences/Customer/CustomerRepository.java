package com.bms.persistences.Customer;

import com.bms.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface CustomerRepository extends JpaRepository<Customer, Integer> {

    List<Customer> findByCusNameContaining(String cusName);

    List<Customer> findByCusPhoneContaining(String cusPhone);

    List<Customer> findByCusEmailContaining(String cusEmail);

    Customer save(Customer customer);

    void deleteById(Integer Id);

}