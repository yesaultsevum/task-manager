import 'rxjs/Rx';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {PROJECTS}     from './mock-projects';
import {Http, Response} from 'angular2/http';

@Injectable()
export class ProjectService {
	constructor (
		private http : Http
	) {}

  getProjects() {
   //  let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
   //  let options = new RequestOptions({ headers: headers });

	  // return this.http.post('http://10.13.15.72/api/Albrus.aspx/ProjectGetAll', '', options)
   //              .map(projects => <Project[]> res.d)
   //              .do(data => console.log(data))
   //              .catch(this.handleError);
  	return Promise.resolve(PROJECTS);
	}

  getProject(id: number) {
    return Promise.resolve(PROJECTS).then(
      projects => projects.filter(project => project.idProj === id)[0]
    );
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    //console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

