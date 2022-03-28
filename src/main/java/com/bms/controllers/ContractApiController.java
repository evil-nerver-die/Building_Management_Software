package com.bms.controllers;

import com.bms.DTO.ContractDto;
import com.bms.DTO.SaveContractDto;
import com.bms.models.Contract;
import com.bms.persistences.Contract.ContractService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
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
    List<ContractDto> contracts() {
        return contractService.findAll().stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());

    }

    //@PostMapping("/search")
//    ArrayList<ContractDto> Search(String input) {
//        ArrayList<ContractDto> contracts = new ArrayList<>();
//        contractService.findByConNameContaining(input).forEach(new Consumer<Contract>() {
//            @Override
//            public void accept(Contract contract) {
//                ContractDto conDto = new ContractDto(contract);
//                if(!contracts.contains(conDto)){
//                    contracts.add(conDto);}
//            }
//        });
//        contractService.findByConCodeContaining(input).forEach(new Consumer<Contract>() {
//            @Override
//            public void accept(Contract contract) {
//                ContractDto conDto = new ContractDto(contract);
//                if(!contracts.contains(conDto)){
//                    contracts.add(conDto);}
//            }
//        });
//        contractService.findByConCreatedContaining(input).forEach(new Consumer<Contract>() {
//            @Override
//            public void accept(Contract contract) {
//                ContractDto conDto = new ContractDto(contract);
//                if(!contracts.contains(conDto)){
//                    contracts.add(conDto);}
//            }
//        });
//        return contracts;
//    }

    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(SaveContractDto contractDto) {
        contractService.save(modelMapper.map(contractDto, Contract.class));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteReserveById(@PathVariable Integer id) {
        contractService.deleteByConID(id);
        return ResponseEntity.ok().build();
    }
}
