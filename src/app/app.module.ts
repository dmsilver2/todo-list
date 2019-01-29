import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoCreateComponent } from './todo-list/todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoCreateComponent,
        TodoEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
