import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'puzzle', component: PuzzleComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
