import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee.model';

@Component({
    selector: 'employee-list',
    templateUrl: 'employee.component.html',
    styleUrls:['./employee.component.scss']
})

export class EmployeeListComponent implements OnInit {
    employees: Employee[];
    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.getEmployees();
        
    }

    public getEmployees() {
        this.employeeService.getallemployees().subscribe((data: Employee[] )=> {
            this.employees = data;
        });
    }
}