import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-large-block',
  template: `
  <a href='{{this.link}}' target='_blank' rel='noopener noreferrer'>
    <div class='container div-hover w-75' style='outline:1px solid grey;padding:20px;'>
      <div class='row justify-content-center align-items-center'>
          <div class="col-md-2">
              <img src='/assets/{{this.preview}}' height='100px' width='auto'>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-7">
              <h3 style="text-align:center;">{{this.title}}</h3>
              <p>{{this.description}}<p>
          </div>
      </div>
    </div>
  </a>`,
  styleUrls: ['./document-large-block.component.css']
})
export class DocumentLargeBlockComponent {
  @Input() preview: string = 'nickrose-resume-web.png';
  @Input() link: string = 'https://www.exrisk.net/resume';
  @Input() title: string = "Error!";
  @Input() description: string = "couldn't find the document. come back later!";
}
