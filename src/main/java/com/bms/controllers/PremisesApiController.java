package com.bms.controllers;

import com.bms.DTO.PremisesByFloorDto;
import com.bms.DTO.PremisesDto;
import com.bms.models.Premises;
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
    List<PremisesByFloorDto> premises() {
        Map<Integer, List<Premises>> floorMap = new HashMap<>();
        var premiseList = premiseService.findAll();
        for (var promise : premiseList) {
            if (floorMap.get(promise.getFloor()) == null) {
                floorMap.put(promise.getFloor(), new ArrayList<Premises>());
            }
            floorMap.get(promise.getFloor()).add(promise);
        }

        List<PremisesByFloorDto> result = new ArrayList<>();
        for (var key : floorMap.keySet()) {
            result.add(new PremisesByFloorDto(key,
                    floorMap.get(key)
                            .stream()
                            .map(premises -> modelMapper.map(premises, PremisesDto.class))
                            .collect(Collectors.toList())
                    )
            );
        }
        return result;
    }

    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody Premises premises) {
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
        return premiseService.findByName(input).stream()
                .map(premises -> modelMapper.map(premises, PremisesDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/findFloor")
    List<PremisesDto> findFloor(Integer input) {
        return premiseService.findByFloor(input).stream()
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
