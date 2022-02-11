import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent {
  target = '5061b91f3c5586e2b0bb4a5d213f61117299341318e4906b81e0a446aa87f843';
  // a testament to the power of crypto - the answer is right here ;)
  ctxt = 'wMzhA5PvwoZv9IfVBkqS0l0x8ZGb145+Mk3PTXHAZZk5TWoXd5K4SHvtt39R4fnJo3wH8jgbvIlf/38N7iiQswXEoEmSDoBgXIQdnzZZCPF3ls7Pkh4Y23hq25Wj+14N'
  guesses = ['','','',''];

  private toHex(str: string): string {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  private generateResponse(str: string): string {
    // pls no brute force, unless you're willing to pay my heroku bill
    const key = this.toHex(str.slice(0,8));
    console.log(key);
    return `[MATCH] MODE=AES-EBC, IV=NULL, KEY=${key}, CTXT=${this.ctxt}`;
  }

  private async hash(str: string) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
  }

  public opaque(i: number): any {
    return {'opacity':1-(i*0.25),'overflow-wrap':'break-word'};
  }

  public async onSubmit(form : any) {
    const h = await this.hash(form.value.simonSays);
    this.guesses.unshift(h);
    this.guesses.pop();
    if (h === this.target) {
      const m = this.generateResponse(form.value.simonSays)
      this.guesses.unshift(m);
      this.guesses.pop();
    }
  }
}