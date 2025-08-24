import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from 'types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks(): Task[] {
    return this.appService.getTasks();
  }
}
