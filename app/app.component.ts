import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProjectsListComponent} from './projects-list.component';
import {ProjectDetailComponent} from './project-detail.component';
import {ProjectsComponent} from './projects.component';
import {ProjectService} from './project.service';
import {BoardService} from './board.service';
import {TaskService} from './task.service';
import {AuthComponent} from './auth.component';


@Component({
  selector: 'projects-app',
  templateUrl: 'templates/project.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ProjectService, BoardService, TaskService, AuthComponent, Http]
})
@RouteConfig([
  {path: '/projects', name: 'Projects', component: ProjectsListComponent },
  {path: '/projects/:id', name: 'Dashboard', component: ProjectDetailComponent},
   {path: '', name: 'Auth', component: AuthComponent, useAsDefault: true}
])
export class AppComponent {
  public title = 'Projects';
}


