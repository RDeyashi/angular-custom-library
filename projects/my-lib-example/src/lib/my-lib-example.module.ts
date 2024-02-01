import { NgModule } from '@angular/core';
import { MyLibraryExampleComponent } from './my-lib-example.component';
import { RabiInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MyLibraryExampleComponent,
    RabiInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    MyLibraryExampleComponent, RabiInputComponent
  ]
})
export class MyLibraryExampleModule { }
