import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-block',
  template: `
  <a href='/assets/doc-previews/{{this.docname}}' target='_blank' download>
    <div class='div-hover'>
      <div class='container' style='outline:1px solid grey;padding:10px;'>
        <div class='row justify-content-center align-items-center'>
            <div class="col-sm-auto">
                <img src='/assets/large/{{this.docname}}' height='100px' width='auto'>
            </div>
            <div class="col-sm">
                <p>{{this.description}}</p>
            </div>
        </div>
      </div>
    </div>
  </a>`,
  styleUrls: ['./document-block.component.css']
})
export class DocumentBlockComponent {
  @Input() docname: string = 'nickrose-resume-web.png';
  @Input() description: string = "couldn't find the document. come back later!";
}
