import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
        
      ]),
      
    ]),
  ]
})
export class TooltipComponent implements OnInit {
  @Input() image=''
  @Input() text = '';
  constructor() { }

  ngOnInit(): void {
  }

}
