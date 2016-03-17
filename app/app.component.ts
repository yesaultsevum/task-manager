import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProjectsListComponent} from './projects-list.component';
import {ProjectDetailComponent} from './project-detail.component';
//import {DashboardComponent} from './dashboard.component';
import {ProjectsComponent} from './projects.component';
import {ProjectService} from './project.service';


@Component({
  selector: 'projects-app',
  templateUrl: 'templates/project.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ProjectService]
})
@RouteConfig([
  //{path: '/', redirectTo: ['Projects'] }
  {path: '/projects', name: 'Projects', component: ProjectsListComponent, useAsDefault: true },
  {path: '/projects/:id', name: 'Dashboard', component: ProjectDetailComponent}
  // {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  // {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
  public title = 'Projects';
}


