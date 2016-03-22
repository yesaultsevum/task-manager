import {Injectable} from 'angular2/core';
import {BOARDS}     from './mock-boards';

@Injectable()
export class BoardService {
	getBoards() {
    return Promise.resolve(BOARDS);
  }

  // getProject(id: number) {
  //   return Promise.resolve(PROJECTS).then(
  //     projects => projects.filter(project => project.idProj === id)[0]
  //   );
  // }
}

