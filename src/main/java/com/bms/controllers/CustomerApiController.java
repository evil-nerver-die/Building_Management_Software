package com.bms.controllers;

import com.bms.models.CusDto;
import com.bms.models.Customer;
import com.bms.persistences.Customer.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.function.Consumer;

@RestController
public class CustomerApiController {
    @Autowired
    private ModelMapper modelMapper;

    CustomerService customerService;

    // Constructor injection
    public CustomerApiController(CustomerService customerService) {
        this.customerService = customerService;
    }


    @GetMapping("/api/customers")
    ArrayList<CusDto> customers() {
        ArrayList<CusDto> customers = new ArrayList<>();
        customerService.findAll().forEach(new Consumer<Customer>() {
            @Override
            public void accept(Customer customer) {
                CusDto cusDto = new CusDto(customer);
                customers.add(cusDto);
            }
        });
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







}