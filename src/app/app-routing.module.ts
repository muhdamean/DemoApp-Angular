import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DepartmentsListComponent } from './pages/departments-list/departments-list.component';
import { AddDepartmentComponent } from './pages/add-department/add-department.component';
import { UpdateDepartmentComponent } from './pages/update-department/update-department.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './AuthGuard';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch: 'full'},
  {path:'register', component:RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'employees', component:EmployeesListComponent, canActivate: [AuthGuard]},
  {path:'update-employee/:id', component:UpdateEmployeeComponent, canActivate: [AuthGuard]},
  {path:'departments', component:DepartmentsListComponent, canActivate: [AuthGuard]},
  {path:'add-department', component:AddDepartmentComponent, canActivate: [AuthGuard]},
  {path:'update-department/:id', component:UpdateDepartmentComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
