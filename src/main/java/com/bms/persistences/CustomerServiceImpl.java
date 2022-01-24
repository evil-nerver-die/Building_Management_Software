package com.bms.persistences;

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
    public List<Customer> getByCustomerNameContaining(String name) {
        return repository.getByCustomerNameContaining(name);
    }

    @Override
    public Iterable<Customer> findAll() {
        return repository.findAll();
    }

    public Customer save(Customer customer){
        return repository.save(customer);
    }

    @Override
    public void deleteByID(Integer id) {
        repository.deleteById(id);
    }
}