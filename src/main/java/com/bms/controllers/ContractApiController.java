package com.bms.controllers;

import com.bms.DTO.ContractDto;
import com.bms.DTO.CustomerDto;
import com.bms.DTO.SaveContractDto;
import com.bms.models.Contract;
import com.bms.persistences.Contract.ContractService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/contract")
public class ContractApiController {
    @Autowired
    private ModelMapper modelMapper;

    ContractService contractService;

    // Constructor injection
    public ContractApiController(ContractService contractService) {
        this.contractService = contractService;
    }


    @GetMapping
    List<ContractDto> customers() {
        return contractService.findAll().stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());
    }


    @GetMapping("/findName")
    List<ContractDto> findName(String input) {
        return contractService.findByConNameContaining(input).stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findCode")
    List<ContractDto> findCode(String input) {
        return contractService.findByConCodeContaining(input).stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());

    }

    @GetMapping("/findConCreated")
    List<ContractDto> findConCreated(String input) {
        return contractService.findByConCreatedContaining(input).stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody SaveContractDto contractDto) {
        contractService.save(modelMapper.map(contractDto, Contract.class));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        contractService.deleteByID(id);
        return ResponseEntity.ok().build();
    }
}
