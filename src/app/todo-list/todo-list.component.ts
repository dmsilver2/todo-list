import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
    todos: Todo[] = [];
    todosSub: Subscription;

    constructor(private todoService: TodosService) { }

    ngOnInit() {
        this.todosSub = this.todoService.getTodoListUpdateListener()
            .subscribe((todos: Todo[]) => {
                console.log(todos);
                this.todos = todos;
            });
        this.todoService.fetchTodos();
    }

    ngOnDestroy() {
        this.todosSub.unsubscribe();
    }
}
