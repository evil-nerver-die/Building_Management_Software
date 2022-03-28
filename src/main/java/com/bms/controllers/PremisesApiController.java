package com.bms.controllers;

import com.bms.DTO.CustomerDto;
import com.bms.DTO.PremisesDto;
import com.bms.DTO.ServicesDto;
import com.bms.models.Premises;
import com.bms.models.Services;
import com.bms.persistences.Premise.PremiseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/premises")
public class PremisesApiController {
    @Autowired
    private ModelMapper modelMapper;

    PremiseService premiseService;

    // Constructor injection
    public PremisesApiController(
                         PremiseService premiseService) {
        this.premiseService = premiseService;


    }

    @GetMapping
    List<PremisesDto> premises() {
        return premiseService.findAll().stream()
                .map(premises -> modelMapper.map(premises, PremisesDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "add")
    ResponseEntity<?> reserve(Premises premises) {
        premiseService.save(premises);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        premiseService.deleteByID(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/findName")
    List<PremisesDto> findName(String input) {
        return premiseService.findByPremiseName(input).stream()
                .map(premises -> modelMapper.map(premises, PremisesDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/findFloor")
    List<PremisesDto> findFloor(Integer input) {
        return premiseService.findByPremiseFloor(input).stream()
                .map(premises -> modelMapper.map(premises, PremisesDto.class))
                .collect(Collectors.toList());
    }

//    @PostMapping(value = "/api/premises/search")
//    ArrayList<PremisesDto> searchPremisesName(String input) {
//        ArrayList<PremisesDto> premises = new ArrayList<>();
//        premiseService.findByPremiseName(input).forEach(new Consumer<Premises>() {
//            @Override
//            public void accept(Premises premise) {
//                PremisesDto premisesDto = new PremisesDto(premise);
//                if (!premises.contains(premisesDto)){
//                premises.add(premisesDto);}
//            }
//        });
//        premiseService.findByPremiseFloor(Integer.parseInt(input)).forEach(new Consumer<Premises>() {
//            @Override
//            public void accept(Premises premise) {
//                PremisesDto premisesDto = new PremisesDto(premise);
//                if (!premises.contains(premisesDto)){
//                premises.add(premisesDto);}
//            }
//        });
//        return premises;
//    }



}
