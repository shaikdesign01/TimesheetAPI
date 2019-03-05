import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee.model';
import { taskList } from '../taskList.model';
import { TaskSchedule } from '../taskSchedule.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
  providers: [EmployeeService]
})
export class TasklistComponent implements OnInit {
  employees: Employee[];
  employeeTaskList: taskList[];
  taskSchedule: TaskSchedule[];
  empSelected: Number;
  taskName: Number;
  isViewable: boolean;
  taskSelectedValue:string="";
  formUser = {};

  constructor(private employeeService: EmployeeService,
              private router: Router, private route: ActivatedRoute) { 
                
              }

  ngOnInit() {
    this.isViewable = true;
    let empId: number = this.route.snapshot.params['id'];
    this.empSelected = empId;
    this.getEmployees();
    this.getEmployeesTaskById(empId);
    this.getTaskList();
  }

  public getEmployees() {
    this.employeeService.getallemployees().subscribe((data: Employee[] )=> {
        this.employees = data;
    });
  }

  public getTaskList() {
    this.employeeService.getallemployeesTask().subscribe((data: taskList[] )=> {
        this.employeeTaskList = data;
    });
  }


  public getEmployeesTaskById(empTaskId: number){
    this.employeeService.getallEmployeesTasksByEmpId(empTaskId).subscribe((data: TaskSchedule[]) => {
      this.taskSchedule = data;
    });
  }

  public bindEmployeeTaskListOnddlChange(empId: number){
    this.bindEmployeeddl(empId);
  }

  public bindEmployeeddl(ddlEmployeeId: number){
    this.employeeService.getallEmployeesTasksByEmpId(ddlEmployeeId).subscribe((data: TaskSchedule[]) => {
      this.taskSchedule = data;
    })
  }

  onBackButtonClick(): void {
    this.router.navigate(['/list']);
  }

  onSubmit(form: NgForm): void{
    console.log('form values', form);
    this.employeeService.CreateTaskList(form).subscribe((data: TaskSchedule) => {
      console.log(data);
    })
    form.reset();
    this.getTaskList();
    this.isViewable = !this.isViewable;
  }

  // onAddTaskClick(id: string){
  //   this.modal.open(id);
  // }
  public onAddTaskClick(): void { this.isViewable = !this.isViewable; }
  //public onSaveTaskClick(): void { this.isViewable = !this.isViewable; }

  getSelectedOptionText(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText)
 }
  selectChangeHandler(event:any){
    this.taskSelectedValue = event.target.value;
    // this.taskSelectedValue = event.target.options[event.target.selectedIndex].text;
  }
}
