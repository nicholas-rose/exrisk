import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texttyper',
  template: `<p>{{this.msg}}_</p>`,
  styleUrls: ['./texttyper.component.css']
})
export class TexttyperComponent implements OnInit {
  constructor() { }

  msg = '';
  msgIndex = 0;
  msgs = [
    'this could be us...',
    'this could be tomorrow...',
    "our survival isn't guaranteed...",
    'we must overcome colossal challenges...',
    'address impending crises...',
    'solve real problems...',
    'we have a duty to one another...',
    'we have a duty to future generations...',
  ];
  delayTime = 75;

  ngOnInit () {
    this.typingAnimation();
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  } 

  public async typingAnimation() {
    await this.delay(1000);
    while (true) {
      const msgChars = [...this.msgs[this.msgIndex]]
      for (const c of msgChars) {
        this.msg += c
        await this.delay(this.delayTime)
      }
      await this.delay(1000)
      while(this.msg.length > 0) {
        this.msg = this.msg.substring(0,this.msg.length-1)
        await this.delay(this.delayTime)
      }
      await this.delay(1000)
      this.msgIndex = (this.msgIndex + 1) % this.msgs.length;
    }
  }

}
