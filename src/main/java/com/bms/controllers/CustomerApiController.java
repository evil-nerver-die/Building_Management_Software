package com.bms.controllers;

import com.bms.DTO.CustomerDto;
import com.bms.DTO.SaveCustomerDto;
import com.bms.models.Customer;
import com.bms.persistences.Customer.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/customer")
public class CustomerApiController {
    @Autowired
    private ModelMapper modelMapper;

    CustomerService customerService;

    // Constructor injection
    public CustomerApiController(CustomerService customerService) {
        this.customerService = customerService;
    }


    @GetMapping
    List<CustomerDto> customers() {
        return customerService.findAll().stream()
                .map(customer -> modelMapper.map(customer, CustomerDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/findName")
    List<CustomerDto> findName(String input) {
        return customerService.findByNameContaining(input).stream()
                .map(customer -> modelMapper.map(customer, CustomerDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findPhone")
    List<CustomerDto> findPhone(String input) {
        return customerService.findByPhoneContaining(input).stream()
                .map(customer -> modelMapper.map(customer, CustomerDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findEmail")
    List<CustomerDto> findEmail(String input) {
        return customerService.findByEmailContaining(input).stream()
                .map(customer -> modelMapper.map(customer, CustomerDto.class))
                .collect(Collectors.toList());
    }

//    @PostMapping("/api/customers/search")
//    ArrayList<CusDto> Search(String input) {
//        ArrayList<CusDto> customers = new ArrayList<>();
//        customerService.findByCusNameContaining(input).forEach(new Consumer<Customer>() {
//            @Override
//            public void accept(Customer customer) {
//                CusDto cusDto = new CusDto(customer);
//                if(!customers.contains(cusDto)){
//                customers.add(cusDto);}
//            }
//        });
//        customerService.findByCusPhoneContaining(input).forEach(new Consumer<Customer>() {
//            @Override
//            public void accept(Customer customer) {
//                CusDto cusDto = new CusDto(customer);
//                if(!customers.contains(cusDto)){
//                    customers.add(cusDto);}
//            }
//        });
//        customerService.findByCusEmailContaining(input).forEach(new Consumer<Customer>() {
//            @Override
//            public void accept(Customer customer) {
//                CusDto cusDto = new CusDto(customer);
//                if(!customers.contains(cusDto)){
//                    customers.add(cusDto);}
//            }
//        });
//        return customers;
//    }
    
    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody SaveCustomerDto customerDto) {
        customerService.save(modelMapper.map(customerDto, Customer.class));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        customerService.deleteByID(id);
        return ResponseEntity.ok().build();
    }
}