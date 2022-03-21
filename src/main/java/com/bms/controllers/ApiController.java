package com.bms.controllers;

import com.bms.models.Customer;
import com.bms.models.Services;
import com.bms.persistences.CustomerService;
import com.bms.persistences.ServicesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {
    CustomerService customerService;
    ServicesService servicesService;

    // Constructor injection
    public ApiController(CustomerService customerService,
                         ServicesService servicesService) {
        this.customerService = customerService;
        this.servicesService = servicesService;
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
    @GetMapping("/api/services")
    Iterable<Services> services() {
        Iterable<Services> services = servicesService.findAll();
        return services;
    }

    @PostMapping(value = "/api/save")
    ResponseEntity<?> reserve(Services services) {
        servicesService.save(services);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/delete")
    ResponseEntity<?> deleteById(Integer id) {
        customerService.deleteByID(id);
        return ResponseEntity.ok().build();
    }
}
