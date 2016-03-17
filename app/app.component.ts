import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProjectsListComponent} from './projects-list.component';
import {ProjectDetailComponent} from './project-detail.component';
import {ProjectsComponent} from './projects.component';
import {ProjectService} from './project.service';


@Component({
  selector: 'projects-app',
  templateUrl: 'templates/project.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ProjectService]
})
@RouteConfig([
  {path: '/projects', name: 'Projects', component: ProjectsListComponent, useAsDefault: true },
  {path: '/projects/:id', name: 'Dashboard', component: ProjectDetailComponent}
])
export class AppComponent {
  public title = 'Projects';
}


