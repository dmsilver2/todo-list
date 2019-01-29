import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const appRoutes: Routes = [
    { path: 'todos', component: TodoListComponent },
    { path: 'todos/:id', component: TodoEditComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
