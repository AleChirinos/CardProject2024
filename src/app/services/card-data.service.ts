import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private _cardName: Subject<string> = new Subject<string>();
  private _cardNumber: Subject<string> = new Subject<string>();
  private _cardExpiry: Subject<string> = new Subject<string>();
  private _cardCVC: Subject<string> = new Subject<string>();

  get cardName(): Subject<string> {
    return this._cardName;
  }

  get cardNumber(): Subject<string> {
    return this._cardNumber;
  }

  get cardExpiry(): Subject<string> {
    return this._cardExpiry;
  }

  get cardCVC(): Subject<string> {
    return this._cardCVC;
  }


  public setCardName(cardName: string) {
    this._cardName.next(cardName);
  }

  public setCardNumber(cardNumber: string) {
    this._cardNumber.next(cardNumber);
  }

  public setCardExpiry(cardExpiry: string) {
    this._cardExpiry.next(cardExpiry);
  }

  public setCardCVC(cardCVC: string) {
    this._cardCVC.next(cardCVC);
  }
}
