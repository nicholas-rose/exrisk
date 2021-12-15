import { Component } from '@angular/core';
import { Buffer } from 'buffer';
import { SHA256 } from 'crypto-ts';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent {
  target = '5061b91f3c5586e2b0bb4a5d213f61117299341318e4906b81e0a446aa87f843';
  last = '';

  private async hash(str: string) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
  }

  public async onSubmit(form : any) {
    const h = await this.hash(form.value.simonSays);
    this.last = h;
    if (h === this.target) {
      console.log('MATCHING');
    }
  }
}
