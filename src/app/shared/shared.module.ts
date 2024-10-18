import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingBarComponent } from './components/routing-bar/routing-bar.component';



@NgModule({
  declarations: [RoutingBarComponent],
  imports: [
    CommonModule
  ],
  exports: [RoutingBarComponent]
})
export class SharedModule { }
