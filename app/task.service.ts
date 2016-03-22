import {Injectable} from 'angular2/core';
import {TASKS}     from './mock-tasks';

@Injectable()
export class TaskService {
    getTasks() {
    return Promise.resolve(TASKS);
  }
}

