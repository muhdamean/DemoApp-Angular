import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DepartmentsListComponent } from './pages/departments-list/departments-list.component';
import { AddDepartmentComponent } from './pages/add-department/add-department.component';
import { UpdateDepartmentComponent } from './pages/update-department/update-department.component';
import { DatePipe } from '@angular/common';
import { AccountService } from './services/account.service';
import { EmployeesService } from './services/employees.service';
import { DepartmentService } from './services/department.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    NotFoundComponent,
    FooterComponent,
    DepartmentsComponent,
    EmployeesListComponent,
    UpdateEmployeeComponent,
    DepartmentsListComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    AccountService,
    EmployeesService,
    DepartmentService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
