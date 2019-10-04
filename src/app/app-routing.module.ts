import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterOverviewComponent } from './components/chapter-overview/chapter-overview.component';
import { ChapterViewComponent } from './components/chapter-view/chapter-view.component';


const routes: Routes = [
  {path: '', component: ChapterOverviewComponent},
  {path: 'chapter/:chapterIndex', component: ChapterViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
