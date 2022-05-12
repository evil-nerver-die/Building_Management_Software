package com.bms.controllers;

import com.bms.DTO.ContractDto;
import com.bms.persistences.Contract.ContractService;
import com.bms.persistences.account.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/contract")
public class AccountApiController {
    @Autowired
    private ModelMapper modelMapper;

    AccountService accountService;

    // Constructor injection
    public AccountApiController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    List<ContractDto> accounts() {
        return accountService.findAll().stream()
                .map(contract -> modelMapper.map(contract, ContractDto.class))
                .collect(Collectors.toList());
    }
}
