import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  alphaNumbers: number[] = [];

  constructor(private _numberService: NumberService) { }

  ngOnInit() {
    this.alphaNumbers = this._numberService.getSequence(1);
  }

  generate() {
    this._numberService.addNumToSeq(1);
  }



}
