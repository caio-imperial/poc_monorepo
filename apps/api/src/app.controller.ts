import { Controller, Get } from '@nestjs/common';
import { Task } from 'types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks(): Task[] {
    return this.appService.getTasks();
  }
}
