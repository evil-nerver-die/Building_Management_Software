package com.bms.controllers;

import com.bms.models.Employee;
import com.bms.persistences.Employee.EmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
public class EmployeeApiController {
    @Autowired
    private ModelMapper modelMapper;

    EmployeeService employeeService;

    // Constructor injection
    public EmployeeApiController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping
    List<Employee> employees() {
        return employeeService.findAll();
    }

    @GetMapping("/findName")
    List<Employee> findName(String input) {
        return employeeService.findByNameContaining(input);

    }

    @GetMapping("/findPhone")
    List<Employee> findPhone(String input) {
        return employeeService.findByPhoneContaining(input);

    }

    @GetMapping("/findEmail")
    List<Employee> findEmail(String input) {
        return employeeService.findByEmailContaining(input);
    }

    @GetMapping(value = "/{id}")
    Employee getById(@PathVariable Integer id) {
        return employeeService.getById(id);
    }

//    @PostMapping("/api/employees/search")
//    ArrayList<Cus> Search(String input) {
//        ArrayList<Cus> employees = new ArrayList<>();
//        employeeService.findByCusNameContaining(input).forEach(new Consumer<Employee>() {
//            @Override
//            public void accept(Employee employee) {
//                Cus cus = new Cus(employee);
//                if(!employees.contains(cus)){
//                employees.add(cus);}
//            }
//        });
//        employeeService.findByCusPhoneContaining(input).forEach(new Consumer<Employee>() {
//            @Override
//            public void accept(Employee employee) {
//                Cus cus = new Cus(employee);
//                if(!employees.contains(cus)){
//                    employees.add(cus);}
//            }
//        });
//        employeeService.findByCusEmailContaining(input).forEach(new Consumer<Employee>() {
//            @Override
//            public void accept(Employee employee) {
//                Cus cus = new Cus(employee);
//                if(!employees.contains(cus)){
//                    employees.add(cus);}
//            }
//        });
//        return employees;
//    }
    
    @PostMapping(value = "/reserve")
    ResponseEntity<?> reserve(@RequestBody Employee employee) {
        employeeService.save(employee);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteById(@PathVariable Integer id) {
        employeeService.deleteByID(id);
        return ResponseEntity.ok().build();
    }
}