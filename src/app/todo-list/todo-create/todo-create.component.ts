import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.model';

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
    editingTodo = false;

    constructor(private todosService: TodosService) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.todosService.createTodo(form.value.description);
            form.reset();
        } else {
            alert('form is invalid');
        }
    }
}
