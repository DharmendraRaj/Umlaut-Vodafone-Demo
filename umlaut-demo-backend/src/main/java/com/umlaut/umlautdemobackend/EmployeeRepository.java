package com.umlaut.umlautdemobackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.umlaut.umlautdemobackend.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
