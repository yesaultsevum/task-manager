import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http, Response} from 'angular2/http';
//import {Hero} from './hero';
import {ProjectService} from './project.service';

@Component({
  selector: 'my-Projects',
  templateUrl: 'app/projects.component.html',
  // styleUrls: ['app/projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(private _projectService: projectService, private _router: Router) { }

  ngOnInit() {
    this._projectService.getProject().then(projects => this.projects = projects.slice(1,5));
  }

  gotoDetail(project: Project) {
    let link = ['ProjectDetail', { id: project.id }];
    this._router.navigate(link);
  }
}

