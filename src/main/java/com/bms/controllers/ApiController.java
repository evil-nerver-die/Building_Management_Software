package com.bms.controllers;

import com.bms.models.Customer;
import com.bms.models.Premises;
import com.bms.models.Services;
import com.bms.persistences.Customer.CustomerService;
import com.bms.models.Gross;
import com.bms.persistences.Gross.GrossService;
import com.bms.persistences.PremiseService;
import com.bms.persistences.Services.ServicesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {
    CustomerService customerService;
    GrossService grossService;
    ServicesService servicesService;
    PremiseService premiseService;

    // Constructor injection
    public ApiController(CustomerService customerService,
                         GrossService grossService,
                         ServicesService servicesService,
                         PremiseService premiseService) {
        this.customerService = customerService;
        this.grossService = grossService;
        this.servicesService = servicesService;
        this.premiseService = premiseService;


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
        customerService.deleteByCusID(id);
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
        grossService.deleteByGroID(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/services")
    Iterable<Services> services() {
        Iterable<Services> services = servicesService.findAll();
        return services;
    }

    @PostMapping(value = "/api/add_services")
    ResponseEntity<?> reserve(Services services) {
        servicesService.save(services);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/delete_services_by_id")
    ResponseEntity<?> deleteServiceById(Integer id) {
        servicesService.deleteBySerId(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/premises")
    Iterable<Premises> premises() {
        Iterable<Premises> premises = premiseService.findAll();
        return premises;
    }

    @PostMapping(value = "/api/add_premises")
    ResponseEntity<?> reserve(Premises premises) {
        premiseService.save(premises);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/delete_premises_by_id")
    ResponseEntity<?> deleteByPremisesId(Integer id) {
        premiseService.deleteById(id);
        return ResponseEntity.ok().build();
    }



}
