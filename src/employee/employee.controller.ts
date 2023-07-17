import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put
  } from '@nestjs/common';
  import {
    EmployeeService
  } from 'src/services/employee.service';
  import {
    CreateEmployeeDto
  } from 'src/employee/create-employee.dto';
  import {
    UpdateEmployeeDto
  } from 'src/employee/update-employee.dto';
  
  @Controller('employee')
  export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}
  
    @Post()
    create(@Body() createEmployeeDto: CreateEmployeeDto) {
      return this.employeeService.create(createEmployeeDto);
    }
  
    @Get()
    findAll() {
      return this.employeeService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.employeeService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
      return this.employeeService.update(id, updateEmployeeDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.employeeService.remove(id);
    }
  }