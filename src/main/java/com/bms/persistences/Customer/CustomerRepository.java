package com.bms.persistences.Customer;

import com.bms.models.Customer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

interface CustomerRepository extends CrudRepository<Customer, Integer> {

    List<Customer> getByCusNameContaining(String cusName);

    Customer save(Customer customer);

    void deleteByCusId(Integer cusId);

}