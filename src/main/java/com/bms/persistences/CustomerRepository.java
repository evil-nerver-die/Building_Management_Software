package com.bms.persistences;

import com.bms.models.Customer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

interface CustomerRepository extends JpaRepository<Customer, Integer> {

    List<Customer> getByCustomerNameContaining(String name);

    Customer save(Customer customer);

    void deleteById(Integer id);

}