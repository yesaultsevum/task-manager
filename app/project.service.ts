import {Injectable} from 'angular2/core';
import {PROJECTS}     from './mock-projects';

@Injectable()
export class ProjectService {
    getProjects() {
    return Promise.resolve(PROJECTS);
  }

    getProject(id: number) {
    return Promise.resolve(PROJECTS).then(
      projects => projects.filter(project => project.idProj === id)[0]
    );
  }
}

