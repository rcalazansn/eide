import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valorProcedimento: number = 0;

  debito: string = '0.00';
  credito1: string = '0.00';
  credito2: string = '0.00';
  credito3: string = '0.00';

  constructor(public alertCtrl: AlertController) {
  }

  calcular() {
    if (this.valorProcedimento == undefined || this.valorProcedimento <= 0) {
      const alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Informar valor maior que zero!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.debito = (this.valorProcedimento * 1.03).toFixed(2);
      this.credito1 = (this.valorProcedimento * 1.04).toFixed(2);
      this.credito2 = (this.valorProcedimento * 1.09).toFixed(2);
      this.credito3 = (this.valorProcedimento * 1.11).toFixed(2);
    }
  }
}
