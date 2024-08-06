import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.scss']
})
export class CardFrontComponent implements OnInit {
  @Input() inputCardNumber: string;
  @Input() inputCardName: string;
  @Input() inputCardExpiryMM: string;
  @Input() inputCardExpiryYY: string;

  constructor() {
    this.inputCardNumber = '';
    this.inputCardName = '';
    this.inputCardExpiryMM = '';
    this.inputCardExpiryYY = '';
  }

  ngOnInit(): void {
  }

}
