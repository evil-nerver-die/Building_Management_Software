package com.bms.controllers;

import com.bms.DTO.PremisesDto;
import com.bms.DTO.SaveCustomerDto;
import com.bms.DTO.SaveServiceDto;
import com.bms.models.Customer;
import com.bms.models.Services;
import com.bms.DTO.ServicesDto;
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




    @PostMapping("/api/service/search")
    ArrayList<ServicesDto> Search(String input) {
        ArrayList<ServicesDto> services = new ArrayList<>();
        servicesService.findBySerName(input).forEach(new Consumer<Services>() {
            @Override
            public void accept(Services service) {
                ServicesDto servicesDto = new ServicesDto(service);
                if(!services.contains(servicesDto)){
                    services.add(servicesDto);}
            }
        });
        servicesService.findBySerPrice(input).forEach(new Consumer<Services>() {
            @Override
            public void accept(Services service) {
                ServicesDto servicesDto = new ServicesDto(service);
                if(!services.contains(servicesDto)){
                    services.add(servicesDto);}
            }
        });
        servicesService.findBySerProvider(input).forEach(new Consumer<Services>() {
            @Override
            public void accept(Services service) {
                ServicesDto servicesDto = new ServicesDto(service);
                if(!services.contains(servicesDto)){
                    services.add(servicesDto);}
            }
        });
        return services;
    }




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
    List<PremisesDto> premises() {
        return servicesService.findAll().stream()
                .map(premises -> modelMapper.map(premises, PremisesDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "add")
    ResponseEntity<?> reserve(SaveServiceDto serviceDto) {
        servicesService.save(modelMapper.map(serviceDto, Services.class));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        servicesService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
