import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  betaNumbers: number[];

  constructor(private _numberService: NumberService) { }

  ngOnInit() {
    this.betaNumbers = this._numberService.getSequence(2);
  }

  generate() {
    this._numberService.addNumToSeq(2);
  }

}
