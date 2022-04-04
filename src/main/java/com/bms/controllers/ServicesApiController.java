package com.bms.controllers;

import com.bms.DTO.*;
import com.bms.models.Customer;
import com.bms.models.Services;
import com.bms.persistences.Services.ServicesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/services")
public class ServicesApiController {
    @Autowired
    private ModelMapper modelMapper;


    ServicesService servicesService;


    // Constructor injection
    public ServicesApiController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }




//    @PostMapping("/api/service/search")
//    ArrayList<ServicesDto> Search(String input) {
//        ArrayList<ServicesDto> services = new ArrayList<>();
//        servicesService.findBySerName(input).forEach(new Consumer<Services>() {
//            @Override
//            public void accept(Services service) {
//                ServicesDto servicesDto = new ServicesDto(service);
//                if(!services.contains(servicesDto)){
//                    services.add(servicesDto);}
//            }
//        });
//        servicesService.findBySerPrice(input).forEach(new Consumer<Services>() {
//            @Override
//            public void accept(Services service) {
//                ServicesDto servicesDto = new ServicesDto(service);
//                if(!services.contains(servicesDto)){
//                    services.add(servicesDto);}
//            }
//        });
//        servicesService.findBySerProvider(input).forEach(new Consumer<Services>() {
//            @Override
//            public void accept(Services service) {
//                ServicesDto servicesDto = new ServicesDto(service);
//                if(!services.contains(servicesDto)){
//                    services.add(servicesDto);}
//            }
//        });
//        return services;
//    }




//    @GetMapping("/api/services")
//    ArrayList<ServicesDto> services() {
//        ArrayList<ServicesDto> services = new ArrayList<>();
//        servicesService.findAll().forEach(new Consumer<Services>() {
//            @Override
//            public void accept(Services service) {
//                ServicesDto servicesDto = new ServicesDto(service);
//                services.add(servicesDto);
//            }
//        });
//        return services;
//    }

    @GetMapping
    List<ServicesDto> services() {
        return servicesService.findAll().stream()
                .map(services -> modelMapper.map(services, ServicesDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/findName")
    List<CustomerDto> findName(String input) {
        return servicesService.findByName(input).stream()
                .map(services -> modelMapper.map(services, CustomerDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findPrice")
    List<CustomerDto> findPrice(String input) {
        return servicesService.findByPrice(input).stream()
                .map(services -> modelMapper.map(services, CustomerDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findProvider")
    List<CustomerDto> findProvider(String input) {
        return servicesService.findByProvider(input).stream()
                .map(services -> modelMapper.map(services, CustomerDto.class))
                .collect(Collectors.toList());

    }

    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody SaveServiceDto serviceDto) {
        servicesService.save(modelMapper.map(serviceDto, Services.class));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        servicesService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
