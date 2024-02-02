import { NgModule } from '@angular/core';
import { MyLibraryExampleComponent } from './my-lib-example.component';
import { RabiInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RabiButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    MyLibraryExampleComponent,
    RabiInputComponent,
    RabiButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    MyLibraryExampleComponent, RabiInputComponent, RabiButtonComponent
  ]
})
export class MyLibraryExampleModule { }
