package com.bms.controllers;

import com.bms.models.Customer;
import com.bms.persistences.CustomerService;
import com.bms.models.Gross;
import com.bms.persistences.GrossService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {
    CustomerService customerService;
    GrossService grossService;

    // Constructor injection
    public ApiController(CustomerService customerService,GrossService grossService) {
        this.customerService = customerService;
        this.grossService = grossService;
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



    @GetMapping("/api/gross")
    Iterable<Gross> gross() {
        Iterable<Gross> gross = grossService.findAll();
        return gross;
    }


    @PostMapping(value = "/api/save_gross")
    ResponseEntity<?> reserve(Gross gross) {
        grossService.save(gross);
        return ResponseEntity.ok().build();
    }


    @PostMapping(value = "/api/delete_gross_by_id")
    ResponseEntity<?> deleteGrossById(Integer id) {
        customerService.deleteByID(id);
        return ResponseEntity.ok().build();
    }



}
