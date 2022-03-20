import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
})
export class FibonacciComponent implements OnInit, AfterViewInit {
  //@ViewChild('newValue') newValue: ElementRef;

  formValue: number = 0;

  public returnedValues$ = this.fibonacciService.getValues();
  public returnedIndexes$ = this.fibonacciService.getIndexes();
  constructor(private fibonacciService: FibonacciService) {
    //this.returnedValues$ = this.fibonacciService.getValues();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}
  postNewValue() {
    console.log(this.formValue);

    if (this.formValue > 0) {
      this.fibonacciService
        .postValue(this.formValue)
        .subscribe((result: any) => {
          console.log('success sent');
          console.log(result);
        });
    }
  }
}
