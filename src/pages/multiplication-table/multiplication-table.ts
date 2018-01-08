import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-multiplication-table',
  templateUrl: 'multiplication-table.html'
})
export class MultiplicationTablePage {
  table: string;

  constructor(public navCtrl: NavController) {
    let tableHtml = '';
    for (let i = 1; i < 11; i++) {
      tableHtml += '<div class="col-xs-4 col-sm-3 col-lg-1">';
      for (let j = 1; j < 11; j++) {
        tableHtml += '<div class="text-center margin border padding">' + (i + ' * ' + j + ' = ' + i * j + '</div>');
      }
      tableHtml += '</div>';
    }
    this.table = tableHtml;
  }
}
