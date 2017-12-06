import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {

  diff: number;

  constructor(private _numberService: NumberService) { }

  ngOnInit() {
  }

  add(a, b) {
    return a + b;
  }
  getDiff() {
    let seq1 = this._numberService.getSequence(1);
    let seq2 = this._numberService.getSequence(2);
    let sum1 = seq1.reduce(this.add);
    let sum2 = seq2.reduce(this.add);

    return sum1 - sum2;

  }

  showDiff() {
    this.diff = this.getDiff();
  }

}
