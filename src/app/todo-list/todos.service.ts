import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
    todoList: Todo[];
    todosUpdated = new Subject<Todo[]>();

    constructor(private http: HttpClient) { }

    fetchTodos(): void {
        this.http.get<{ message: string, todos: Todo[] }>('http://localhost:3000/api/todos')
            .subscribe((todoData) => {
                this.todoList = todoData.todos;
                this.todosUpdated.next([...this.todoList]);
            });
    }

    getTodoListUpdateListener(): Observable<Todo[]> {
        return this.todosUpdated.asObservable();
    }
}
