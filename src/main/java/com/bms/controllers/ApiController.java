package com.bms.controllers;

import com.bms.models.Customer;
import com.bms.persistences.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {
    CustomerService customerService;

    // Constructor injection
    public ApiController(CustomerService customerService) {
        this.customerService = customerService;
    }


    @GetMapping("/api/customers")
    Iterable<Customer> customers() {
        Iterable<Customer> customers = customerService.findAll();
        return customers;
    }


    @PostMapping(value = "/api/reserve")
    ResponseEntity<?> reserve(Customer customer) {
        customerService.save(customer);
        return ResponseEntity.ok().build();
    }


    @PostMapping(value = "/api/delete_reserve_by_id")
    ResponseEntity<?> deleteReserveById(Integer id) {
        customerService.deleteByID(id);
        return ResponseEntity.ok().build();
    }



}
