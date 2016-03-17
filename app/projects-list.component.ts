import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProjectService} from './project.service';
import {ProjectDetailComponent} from './project-detail.component';
import {Project} from './project';

@Component({
  selector: 'my-projects',
  templateUrl: 'app/projects-list.component.html',
  styleUrls: ['app/projects-list.component.css'],
  directives: [ProjectDetailComponent]
})
export class ProjectsListComponent implements OnInit {
  public projects: Project[];
  public selectedProject: Project;
  public projectsView = 'view';

  constructor(private _projectService: ProjectService, private _router: Router) { }

  getProjects() {
    this._projectService.getProjects().then(projects => this.projects = projects);
  }

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
}
