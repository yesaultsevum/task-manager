import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {Project} from './project';
import {Board} from './board';
import {Task} from './task';
import {ProjectService} from './project.service';
import {BoardService} from './board.service';
import {TaskService} from './task.service';

@Component({
  selector: 'project-detail',
  templateUrl: 'templates/project-detail.component.html',
  inputs: ['project']
})
export class ProjectDetailComponent implements OnInit {
  public project: Project;
  public boards: Boards;
  public tasks: Tasks;
  public boardNew = {
    name        : '',
    description : ''
  }
  public boardDetails = {
    id   : 0,
    view : 'view'
  };
  public taskDetails = {
    id   : 0,
    view : 'view'
  };
  public checkNewItem = {
    name : ''
  }

  constructor(
    private _projectService : ProjectService,
    private _boardService   : BoardService,
    private _taskService    : TaskService,
    private _routeParams    : RouteParams,
    private _router         : Router
  ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    boardDetails => this.boardDetails = { id : 0, view : 'view'};
    this._projectService.getProject(id).then(project => this.project = project);
    this._boardService.getBoards(id).then(boards => this.boards = boards);
    this._taskService.getTasks(id).then(tasks => this.tasks = tasks);
  }

  onChangeView(idBoard : IdBoard, type : Type) {
    this.boardDetails = {
      id   : idBoard,
      view : type
    };
    if (type === 'add') {
      this.boardNew = {
        name        : '',
        description : ''
      }
    }
  }

  onChangeTaskView(idTask : IdTask, type : Type) {
    this.taskDetails = {
      id   : idTask,
      view : type
    };
    if (type === 'add') {
      this.taskNew = {
        name        : '',
        description : '',
        checkList   : []
      }
    }
  }

  addCheckItem(task : Task, checkItem : CheckItem) {
    var checkItem = Object.assign({}, checkItem);
    checkItem.check = false;
    if (task.idTask) {
      for (var i = this.tasks.length - 1; i >= 0; i--) {
        if (this.tasks[i].idTask === task.idTask) {
          checkItem.idCheck = this.tasks[i].checkList.length + 1;
          this.tasks[i].checkList.push(checkItem);
          console.log(task, checkItem, this);
        }
        this.tasks[i]
      }
    } else {
      checkItem.idCheck = this.taskNew.checkList.length + 1;
      this.taskNew.checkList.push(checkItem);
    }
    this.checkNewItem.name = '';
  }

  addNewTask(taskNew : TaskNew) {
    var newTask = Object.assign({}, taskNew);
    newTask.idTask = this.tasks.length + 1;
    this.tasks.push(newTask);
    this.taskDetails.view = "view";
    this.taskNew = {
      name        : '',
      description : '',
      checkList   : []
    }

  }

  deleteCheckItem(task : Task, checkItem : CheckItem) {
    console.log(task, checkItem);
    if (task.checkList) {
      for (var i = task.checkList.length - 1; i >= 0; i--) {
        if (task.checkList[i].idCheck === checkItem.idCheck) {
          task.checkList.splice(i, 1);
        }
      }
    }
  }

  addBoard(boardNew : BoardNew) {
    var boardNewCopy = Object.assign({}, boardNew);
    boardNewCopy.idBoard = this.boards.length + 1;
    this.boards.push(boardNewCopy);
    this.boardDetails = { id : 0, view : 'view'};
  }

  goBack() {
    window.history.back();
  }

  goToProjects() {
    this._router.navigate(['Projects', {}]);
  }
} 
