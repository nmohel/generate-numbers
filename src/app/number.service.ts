import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {

  private seq1: number[] = [];
  private seq2: number[] = [];
  constructor(
  ) { }

  getSequence(seqNum: number) {
    // return [1];
    if (seqNum === 1) {
      return this.seq1;
    } else if (seqNum === 2) {
      return this.seq2;
    } else {
      console.log("don't have a sequence of that number");
    }
  }

  addNumToSeq(seqNum: number) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (seqNum === 1) {
      this.seq1.push(randomNum);
    } else if (seqNum === 2) {
      this.seq2.push(randomNum);
    } else {
      console.log("don't have a sequence of that number");
    }
  }


}
