import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee.model';
import { TaskSchedule } from '../taskSchedule.model';
import { taskList } from '../taskList.model';
@Injectable()
export class EmployeeService {
    private baseapi = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getallemployees() {
        return this.http.get(this.baseapi + "/employee/getall");
    }

    getallEmployeesByEmpId(id: number){
        return this.http.get<Employee>(this.baseapi + "/employee/getall" + '/' + id);
    }

    getallEmployeesTasksByEmpId(id: number){
        return this.http.get<TaskSchedule>(this.baseapi + "/TaskSechdules/GetEmpid" + '/' + id);
    }

    getallemployeesTask() {
        return this.http.get(this.baseapi + "/tasks/getalltasks");
    }

    CreateTaskList(taskSchedule: TaskSchedule){
        return this.http.post(this.baseapi + "/TaskSechdules/CreateTask",taskSchedule);
    }

}