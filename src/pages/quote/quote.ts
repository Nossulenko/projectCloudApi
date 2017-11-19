import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { AngularFireDatabase } from "angularfire2/database";
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  //Reference to firebase quotes
  QuotesRef: firebase.database.Reference = firebase.database().ref('/quotes/');
  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
  }
  addQuote(Author: string, Quote: string): void {
    this.QuotesRef.push({
      Auteur: Author,
      Quote: Quote,
    })
  }



}
