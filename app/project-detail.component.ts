import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
  selector: 'my-project-detail',
  templateUrl: 'app/project-detail.component.html',
  styleUrls: ['app/project-detail.component.css'],
  inputs: ['project']
})
export class ProjectDetailComponent implements OnInit {
  public project: Project;
  public projectView = 'view';

  constructor(private _projectService : ProjectService, private _routeParams : RouteParams, private _router: Router) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    projectView => this.projectView = 'view';
    this._projectService.getProject(id).then(project => this.project = project);
  }

  onChangeView(type : Type) {
    this.projectView = type;
  }

  goBack() {
    window.history.back();
  }

  goToProjects() {
    this._router.navigate(['Projects', {}]);
  }
} 
var projectView;
