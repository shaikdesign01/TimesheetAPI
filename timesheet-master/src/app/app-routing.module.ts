import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { EmployeeListComponent } from './employee/employee.component'; 
import { TasklistComponent } from './Task/tasklist.component';


const routes: Routes = [
    {path: 'list', component: EmployeeListComponent},
    {path: 'task/:id', component: TasklistComponent},
    {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
