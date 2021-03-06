package com.bms.controllers;

import com.bms.models.Gross;
import com.bms.persistences.Gross.GrossService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GrossApiController {
    @Autowired
    private ModelMapper modelMapper;

    GrossService grossService;

    // Constructor injection
    public GrossApiController(GrossService grossService) {
        this.grossService = grossService;
    }




    @GetMapping("/api/gross")
    Iterable<Gross> gross() {
        Iterable<Gross> gross = grossService.findAll();
        return gross;
    }







}