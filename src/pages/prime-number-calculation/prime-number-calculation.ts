import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Common from '../../utils/common';

@Component({
  selector: 'page-prime-number-calculation',
  templateUrl: 'prime-number-calculation.html'
})
export class PrimeNumberCalculationPage {
  calculatingNumber: number;
  isCalculated: boolean;
  isPrimeNumber: boolean;

  calculate() {
    if (Common.calculatePrimeNumber(this.calculatingNumber))
      this.isPrimeNumber = true;
    else
      this.isPrimeNumber = false;
    this.isCalculated = true;
  }

  calculatingNumberChanged() {
    this.isCalculated = false;
  }

  constructor(public navCtrl: NavController) {
  }

}
