import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {TasksComponent} from './tasks.component';

@Component({
  selector: 'tasks-app',
  templateUrl: 'templates/task.html',
  inputs: ['boardId']
})
export class TaskComponent implements OnInit {
  public boardId: BoardId;

  constructor(
    private _routeParams    : RouteParams,
    private _router         : Router
  ) { }

  ngOnInit() {
    console.log('test');
    //let id = +this._routeParams.get('id');
    //boardDetails => this.boardDetails = { id : 0, view : 'view'};
    //this._projectService.getProject(id).then(project => this.project = project);
    //this._boardService.getBoards(id).then(boards => this.boards = boards);
  }


  // addBoard(boardNew : BoardNew) {
  //   var boardNewCopy = Object.assign({}, boardNew);
  //   boardNewCopy.idBoard = this.boards.length + 1;
  //   this.boards.push(boardNewCopy);
  //   this.boardDetails = { id : 0, view : 'view'};
  // }

  goBack() {
    window.history.back();
  }
} 
