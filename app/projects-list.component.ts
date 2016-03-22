import 'rxjs/Rx';
import {Component, OnInit} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Router} from 'angular2/router';
import {ProjectService} from './project.service';
import {ProjectDetailComponent} from './project-detail.component';
import {Project} from './project';

@Component({
  selector: 'my-projects',
  templateUrl: 'templates/projects-list.component.html',
  directives: [ProjectDetailComponent]
})

export class ProjectsListComponent implements OnInit {
  public projects: Project[];
  public selectedProject: Project;
  public projectAddData = {
    name        : '',
    description : ''
  };
  public projectsView = 'view';

  constructor(
    private _projectService : ProjectService,
    private _router : Router,
    //private response : Response,
    //backend : ConnectionBackend,
    private http : Http
  ) { }

  getProjects() {
    // this._projectService.getProjects().subscribe(
    //                                      projects => this.projects = projects,
    //                                      error =>  this.errorMessage = <any>error,
    //                                      () => console.log('Secret Quote Complete')
    //                                     );
    //console.log(this._projectService.getProjects());
    this._projectService.getProjects().then(projects => this.projects = projects);
  }

  // getProjects () {
  //   console.log(this);
  //   return this.http.get('http://10.13.15.72/api/Albrus.aspx/ProjectGetAll')
  //                   .map(projects => <Project[]> res.json().data)
  //                   .catch(this.handleError);
  // }

  gotoDetail() {
    this._router.navigate(['ProjectDetail', { id: this.selectedProject.idProj }]);
  }

  onChangeView(type : Type) {
    this.projectsView = type;
  }

  ngOnInit() {
    projectsView => this.projectsView = 'view';
    this.getProjects();
  }

  onSelect(project: Project) { 
    this.selectedProject = project;
    this._router.navigate(['Dashboard', { id: this.selectedProject.idProj }]);
  }

  addProject(projectAddData : ProjectAddData) {
    var newProject = Object.assign({}, projectAddData)
    newProject.idProj = this.projects.length + 1;
    this.projects.push(newProject);
    this.projectsView = 'view';
    this.projectAddData = {
      name        : '',
      description : ''
    }
  }
}
