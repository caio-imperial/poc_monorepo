import { Injectable } from '@nestjs/common';
import { Task } from 'types';

@Injectable()
export class AppService {
  getTasks(): Task[] {
    return [
      {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false,
      },
    ];
  }
}
