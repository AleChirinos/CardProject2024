import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.scss']
})
export class CardBackComponent implements OnInit {
  @Input() inputCardCVC: string;

  constructor() {
    this.inputCardCVC = '';
  }

  ngOnInit(): void {
  }

}
