import { Task } from './task';

export var TASKS: Task[] = [
	{
		idTask 		: 1,
		idBoard 	: 1,
		name 		: 'First Task',
		description : 'First Task Description',
		checkList   : [
			{
				idCheck : 1,
				name 	  : 'Plane Task'
				checked : false
			}
		]
	},
	{
		idTask 		: 2,
		idBoard 	: 1,
		name 		: 'Second Task',
		description : 'Second Task Description',
		checkList   : [
			{
				idCheck : 2,
				name 	  : 'Plane2 Task'
				checked : false
			}
		]
	}
];
