import {
    Module
  } from '@nestjs/common';
  import {
    EmployeeService
  } from 'src/services/employee.service';
  import {
    EmployeeController
  } from 'src/employee/employee.controller';
  import {
    Employee,
    EmployeeSchema
  } from 'src/employee/employee.schema';
  import {
    MongooseModule
  } from '@nestjs/mongoose';

  
  
  @Module({
    imports: [
     MongooseModule.forFeature([
        {
          name: Employee.name,
          schema: EmployeeSchema
        },
     ])
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService]
  })
  export class EmployeeModule {}