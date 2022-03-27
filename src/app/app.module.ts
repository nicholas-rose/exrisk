import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TexttyperComponent } from './texttyper/texttyper.component';
import { FooterComponent } from './footer/footer.component';

import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { DocumentBlockComponent } from './document-block/document-block.component';
import { DocumentLargeBlockComponent } from './document-large-block/document-large-block.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    TexttyperComponent,
    FooterComponent,
    ResumeComponent,
    HomeComponent,
    DocumentBlockComponent,
    DocumentLargeBlockComponent,
    SidebarComponent,
    PuzzleComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
