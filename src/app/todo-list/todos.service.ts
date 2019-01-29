import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

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

    fetchTodoById(id: string) {
        return this.http.get<{ message: string, todo: Todo }>('http://localhost:3000/api/todos/' + id);
    }

    getTodoListUpdateListener(): Observable<Todo[]> {
        return this.todosUpdated.asObservable();
    }

    createTodo(description: string): void {
        this.http.post<{ message: string, createdTodo: Todo }>(
            'http://localhost:3000/api/todos', { description }
        )
            .subscribe((todoData) => {
                this.todoList.push(todoData.createdTodo);
                this.todosUpdated.next([...this.todoList]);
            });
    }

    deleteTodo(todoIndex: number): void {
        const id: string = this.todoList[todoIndex]._id;
        this.http.delete<{ message: string }>(
            `http://localhost:3000/api/todos/${id}`
        )
            .subscribe(() => {
                this.todoList.splice(todoIndex, 1);
                this.todosUpdated.next([...this.todoList]);

            });
    }

    updateTodo(id: string, description: string, completed: boolean) {
        return this.http.put<{ message: string }>(
            `http://localhost:3000/api/todos/${id}`,
            {
                id,
                description,
                completed
            }
        );
    }
    getTodo(index: number): Todo {
        return { ...this.todoList[index] };
    }

    getTodoById(id: string) {
        return {
            ...this.todoList.find((todo: Todo) => {
                return todo._id === id;
            })
        };
    }
}
