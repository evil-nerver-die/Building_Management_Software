package com.bms.controllers;

import com.bms.DTO.AccountDto;
import com.bms.DTO.ContractDto;
import com.bms.DTO.SaveAccountDto;
import com.bms.models.Account;
import com.bms.persistences.account.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/account")
public class AccountApiController {
    @Autowired
    private ModelMapper modelMapper;

    AccountService accountService;

    // Constructor injection
    public AccountApiController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    List<AccountDto> accounts() {
        return accountService.findAll().stream()
                .map(account -> modelMapper.map(account, AccountDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody SaveAccountDto accountDto) {
        accountService.save(modelMapper.map(accountDto, Account.class));
        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "/{id}")
    AccountDto getById(@PathVariable Integer id) {
        return modelMapper.map(accountService.getById(id),AccountDto.class);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        accountService.deleteByID(id);
        return ResponseEntity.ok().build();
    }


}
