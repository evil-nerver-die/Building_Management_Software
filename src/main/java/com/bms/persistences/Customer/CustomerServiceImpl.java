package com.bms.persistences.Customer;

import com.bms.models.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    CustomerRepository repository;

    public CustomerServiceImpl(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Customer> findByCusNameContaining(String cusName) {
        return repository.findByCusNameContaining(cusName);
    }

    @Override
    public List<Customer> findByCusPhoneContaining(String cusPhone) {
        return repository.findByCusPhoneContaining(cusPhone);
    }

    @Override
    public List<Customer> findByCusEmailContaining(String cusEmail) {
        return repository.findByCusEmailContaining(cusEmail);
    }

    @Override
    public List<Customer> findAll() {
        return repository.findAll();
    }

    public Customer save(Customer customer){
        return repository.save(customer);
    }

    @Override
    public void deleteByID(Integer cusId) {
        repository.deleteById(cusId);
    }
}