import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})

export class CardContainerComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
