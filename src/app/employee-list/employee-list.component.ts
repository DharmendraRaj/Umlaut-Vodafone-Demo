import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeeList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => console.log(error)
      );
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
