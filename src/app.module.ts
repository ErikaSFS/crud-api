import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule }from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ehrikaster:EMg260u88KQmQ5Gw@cluster0.z2djtd0.mongodb.net/?retryWrites=true&w=majority'),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
