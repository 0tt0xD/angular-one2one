import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChapterCardComponent } from './components/chapter-card/chapter-card.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { BannerComponent } from './components/banner/banner.component';
import { ChapterViewComponent } from './components/chapter-view/chapter-view.component';
import { ChapterContentComponent } from './components/chapter-content/chapter-content.component';
import { SubChapterComponent } from './components/sub-chapter/sub-chapter.component';
import { CardComponent } from './components/card/card.component';
import { ChapterOverviewComponent } from './components/chapter-overview/chapter-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapterCardComponent,
    ChapterComponent,
    BannerComponent,
    BannerComponent,
    ChapterViewComponent,
    ChapterContentComponent,
    SubChapterComponent,
    CardComponent,
    ChapterOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
