package com.bms.controllers;

import com.bms.DTO.PremisesDto;
import com.bms.DTO.ServicesDto;
import com.bms.models.Premises;
import com.bms.models.Services;
import com.bms.persistences.Premise.PremiseService;
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
    ResponseEntity<?> deleteByPremisesID(Integer id) {
        premiseService.deleteByPremiseID(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/premises/search")
    ArrayList<PremisesDto> searchPremisesName(String input) {
        ArrayList<PremisesDto> premises = new ArrayList<>();
        premiseService.findByPremiseName(input).forEach(new Consumer<Premises>() {
            @Override
            public void accept(Premises premise) {
                PremisesDto premisesDto = new PremisesDto(premise);
                if (!premises.contains(premisesDto)){
                premises.add(premisesDto);}
            }
        });
        premiseService.findByPremiseFloor(Integer.parseInt(input)).forEach(new Consumer<Premises>() {
            @Override
            public void accept(Premises premise) {
                PremisesDto premisesDto = new PremisesDto(premise);
                if (!premises.contains(premisesDto)){
                premises.add(premisesDto);}
            }
        });
        return premises;
    }



}
