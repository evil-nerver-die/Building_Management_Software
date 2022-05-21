package com.bms.controllers;

import com.bms.DTO.*;
import com.bms.models.Account;
import com.bms.persistences.Premise.PremiseService;
import com.bms.persistences.account.AccountRepository;
import com.bms.persistences.account.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/account")
public class AccountApiController {

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    AccountService accountService;

    @Autowired
    PremiseService premiseService;
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
        accountRepository.save(modelMapper.map(accountDto, Account.class));
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/login")
    boolean login(@RequestBody LoginDto loginDto) {
        Account temp = accountService.findAccountByUsername(loginDto.getUsername());
        if (bCryptPasswordEncoder.matches(loginDto.getPassword(), temp.getPassword())){
            return true;
        }
        else return false;
    }

    @GetMapping("/info")
    StatDto info() {

        var premiseList = premiseService.findAll();
        int rentedCount = 0;
        int disabledCount = 0;
        int availableCount = 0;
        for (var premise : premiseList){
            if(!premise.isDisable()) disabledCount++;
            else{
                if (premise.isStatus()) rentedCount++;
                else availableCount++;
            }
        }
        return new StatDto(accountService.findAll().size(),
                premiseList.size(),
                rentedCount,availableCount,disabledCount);
    }

    @PostMapping(value = "/changePassword")
    ResponseEntity<?> changePassword(@RequestBody ChangePasswordDto changePasswordDto) {
        Account temp = accountService.getById(changePasswordDto.getId());
        String encrypted = bCryptPasswordEncoder.encode(changePasswordDto.getNewPassword());
        temp.setPassword(encrypted);
        accountRepository.save(temp);
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
