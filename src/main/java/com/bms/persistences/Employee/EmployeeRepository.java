package com.bms.persistences.Employee;

import com.bms.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    List<Employee> findByNameContaining(String cusName);

    List<Employee> findByPhoneContaining(String cusPhone);

    List<Employee> findByEmailContaining(String cusEmail);

    Employee save(Employee employee);

    void deleteById(Integer Id);

    Employee getById(Integer id);

}