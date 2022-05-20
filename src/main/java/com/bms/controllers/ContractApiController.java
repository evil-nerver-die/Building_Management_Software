package com.bms.controllers;

import com.bms.DTO.ContractDto;
import com.bms.DTO.PremisesByFloorDto;
import com.bms.DTO.PremisesDto;
import com.bms.DTO.SaveContractDto;
import com.bms.models.Contract;
import com.bms.models.Premises;
import com.bms.persistences.Contract.ContractService;
import com.bms.persistences.Premise.PremiseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/contract")
public class ContractApiController {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    PremiseService premiseService;

    @Autowired
    ContractService contractService;

    // Constructor injection
    @Autowired
    public ContractApiController(ContractService contractService) {
        this.contractService = contractService;
    }


    @GetMapping
    List<ContractDto> contracts() {
        

        return contractService.findAll().stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());
    }


    @GetMapping("/findName")
    List<ContractDto> findName(String input) {
        return contractService.findByNameContaining(input).stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findCode")
    List<ContractDto> findCode(String input) {
        return contractService.findByCodeContaining(input).stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findConCreated")
    List<ContractDto> findConCreated(String input) {
        return contractService.findByDateCreatedContaining(input).stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody SaveContractDto contractDto) {
        contractService.save(modelMapper.map(contractDto, Contract.class));
        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "/{id}")
    ContractDto getById(@PathVariable Integer id) {
        return modelMapper.map(contractService.getById(id),ContractDto.class);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        contractService.deleteByID(id);
        return ResponseEntity.ok().build();
    }
}
