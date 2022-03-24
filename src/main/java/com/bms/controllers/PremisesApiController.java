package com.bms.controllers;

import com.bms.DTO.PremisesDto;
import com.bms.DTO.ServicesDto;
import com.bms.models.Premises;
import com.bms.models.Services;
import com.bms.persistences.PremiseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.function.Consumer;

@RestController
public class PremisesApiController {
    @Autowired
    private ModelMapper modelMapper;

    PremiseService premiseService;

    // Constructor injection
    public PremisesApiController(
                         PremiseService premiseService) {
        this.premiseService = premiseService;


    }

    @GetMapping("/api/premises")
    ArrayList<PremisesDto> premises() {
        ArrayList<PremisesDto> premises = new ArrayList<>();
        premiseService.findAll().forEach(new Consumer<Premises>() {
            @Override
            public void accept(Premises premise) {
                PremisesDto premisesDto = new PremisesDto(premise);
                premises.add(premisesDto);
            }
        });
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
