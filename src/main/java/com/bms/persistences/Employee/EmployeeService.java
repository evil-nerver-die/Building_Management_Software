package com.bms.persistences.Employee;

import com.bms.models.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> findByNameContaining(String cusName);

    List<Employee> findByPhoneContaining(String cusPhone);

    List<Employee> findByEmailContaining(String cusEmail);

    List<Employee> findAll();

    Employee save(Employee faculty);

    void deleteByID(Integer cusId);

    Employee getById(Integer id);


}
