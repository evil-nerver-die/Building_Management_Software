package com.bms.controllers;

import com.bms.models.Services;
import com.bms.DTO.ServicesDto;
import com.bms.persistences.Services.ServicesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.function.Consumer;

@RestController
public class ServicesApiController {
    @Autowired
    private ModelMapper modelMapper;


    ServicesService servicesService;


    // Constructor injection
    public ServicesApiController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }




    @GetMapping("/api/services")
    ArrayList<ServicesDto> services() {
        ArrayList<ServicesDto> services = new ArrayList<>();
        servicesService.findAll().forEach(new Consumer<Services>() {
            @Override
            public void accept(Services service) {
                ServicesDto servicesDto = new ServicesDto(service);
                services.add(servicesDto);
            }
        });
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




}
