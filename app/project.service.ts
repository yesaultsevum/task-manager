import {Injectable} from 'angular2/core';
import {PROJECTS}     from './mock-projects';
import {Http, Response} from 'angular2/http';

@Injectable()
export class ProjectService {
    getProjects() {
    	console.log(this);
  	  // return this.http.get('http://10.13.15.72/api/Albrus.aspx/ProjectGetAll')
     //              .map(projects => <Project[]> res.json().data)
     //              .catch(this.handleError);
    return Promise.resolve(PROJECTS);
  }

    getProject(id: number) {
    return Promise.resolve(PROJECTS).then(
      projects => projects.filter(project => project.idProj === id)[0]
    );
  }
}

