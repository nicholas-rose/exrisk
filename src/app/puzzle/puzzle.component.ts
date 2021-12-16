import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent {
  target = '5061b91f3c5586e2b0bb4a5d213f61117299341318e4906b81e0a446aa87f843';
  ctxt = 'wMzhA5PvwoZv9IfVBkqS0l0x8ZGb145+Mk3PTXHAZZk5TWoXd5K4SHvtt39R4fnJo3wH8jgbvIlf/38N7iiQswXEoEmSDoBgXIQdnzZZCPF3ls7Pkh4Y23hq25Wj+14N'
  last = '';
  // guesses = ['','','',''];
  opacities = [1,0.75,0.5,0.25];

  private toHex(str: string): string {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  private generateResponse(str: string): string {
    const key = this.toHex(str.slice(0,8));
    console.log(key);
    return `[MATCH] MODE=AES-CBC IV=NULL KEY=${key} CTXT=${this.ctxt}`;
  }

  private async hash(str: string) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
  }

  public async onSubmit(form : any) {
    const h = await this.hash(form.value.simonSays);
    if (h === this.target) {
      this.last = this.generateResponse(form.value.simonSays)
    } else {
      this.last = h;
    }
    // this.guesses.unshift(h);
  }
}