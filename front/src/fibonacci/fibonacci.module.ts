import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FibonacciRoutingModule } from './fibonacci-routing.module';
import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [FibonacciComponent],
  imports: [
    CommonModule,
    FibonacciRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FibonacciService],
})
export class FibonacciModule {}
