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

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
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
        Map<String, List<Premises>> floorMap = new HashMap<>();
        var premiseList = premiseService.findAll();
        for (var premise : premiseList) {
            if (floorMap.get(premise.getFloor()) == null) {
                floorMap.put(premise.getFloor(), new ArrayList<Premises>());
            }
            floorMap.get(premise.getFloor()).add(premise);
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

    @GetMapping(value = "/{id}")
    PremisesDto getById(@PathVariable Integer id) {
        return modelMapper.map(premiseService.getById(id),PremisesDto.class);
    }

    @GetMapping("/findName")
    List<PremisesByFloorDto> findName(String input) {
        Map<String, List<Premises>> floorMap = new HashMap<>();
        var premiseList = premiseService.findByName(input);
        for (var premise : premiseList) {
            if (floorMap.get(premise.getFloor()) == null) {
                floorMap.put(premise.getFloor(), new ArrayList<Premises>());
            }
            floorMap.get(premise.getFloor()).add(premise);
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

    @GetMapping("/findFloor")
    List<PremisesByFloorDto> findFloor(String input) {
        Map<String, List<Premises>> floorMap = new HashMap<>();
        var premiseList = premiseService.findByFloor(input);
        for (var premise : premiseList) {
            if (floorMap.get(premise.getFloor()) == null) {
                floorMap.put(premise.getFloor(), new ArrayList<Premises>());
            }
            floorMap.get(premise.getFloor()).add(premise);
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
