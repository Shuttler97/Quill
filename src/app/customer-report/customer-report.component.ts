import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CustomerReportComponent implements OnInit {
  values = [{ value: 75, text: 'of Grammarly users find writing more enjoyable.' },
  { value: 85, text: "of Grammarly users are now stronger writers." }, 
  { value: 70, text: "of Grammarly users reported an increased level of writing confidence." }]
  constructor() { }

  ngOnInit(): void {
  }

}
