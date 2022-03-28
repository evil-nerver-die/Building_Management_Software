package com.bms.controllers;

import com.bms.DTO.ConDto;
import com.bms.models.Contract;
import com.bms.persistences.Contract.ContractService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.function.Consumer;

public class ContractApiController {
    @Autowired
    private ModelMapper modelMapper;

    ContractService contractService;

    // Constructor injection
    public ContractApiController(ContractService contractService) {
        this.contractService = contractService;
    }


    @GetMapping("/api/contracts")
    ArrayList<ConDto> contracts() {
        ArrayList<ConDto> contracts = new ArrayList<>();
        contractService.findAll().forEach(new Consumer<Contract>() {
            @Override
            public void accept(Contract contract) {
                ConDto conDto = new ConDto(contract);
                contracts.add(conDto);
            }
        });
        return contracts;
    }

    @PostMapping("/api/contracts/search")
    ArrayList<ConDto> Search(String input) {
        ArrayList<ConDto> contracts = new ArrayList<>();
        contractService.findByConNameContaining(input).forEach(new Consumer<Contract>() {
            @Override
            public void accept(Contract contract) {
                ConDto conDto = new ConDto(contract);
                if(!contracts.contains(conDto)){
                    contracts.add(conDto);}
            }
        });
        contractService.findByConCodeContaining(input).forEach(new Consumer<Contract>() {
            @Override
            public void accept(Contract contract) {
                ConDto conDto = new ConDto(contract);
                if(!contracts.contains(conDto)){
                    contracts.add(conDto);}
            }
        });
        contractService.findByConCreatedContaining(input).forEach(new Consumer<Contract>() {
            @Override
            public void accept(Contract contract) {
                ConDto conDto = new ConDto(contract);
                if(!contracts.contains(conDto)){
                    contracts.add(conDto);}
            }
        });
        return contracts;
    }

    @PostMapping(value = "/api/reserve")
    ResponseEntity<?> reserve(Contract contract) {
        contractService.save(contract);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/delete_reserve_by_id")
    ResponseEntity<?> deleteReserveById(Integer id) {
        contractService.deleteByConID(id);
        return ResponseEntity.ok().build();
    }
}
