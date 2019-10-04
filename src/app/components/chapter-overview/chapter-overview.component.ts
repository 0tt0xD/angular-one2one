import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../models/Chapter';
import { Router } from '@angular/router';
import { One2OneBasicService } from '../../services/One2OneBasicService';

@Component({
  selector: 'app-chapter-overview',
  templateUrl: './chapter-overview.component.html',
  styleUrls: ['./chapter-overview.component.css']
})
export class ChapterOverviewComponent implements OnInit {

  chapters : Chapter[]
  selectedChapter : Chapter;
  
  constructor(
      private router : Router,
      private one2oneService : One2OneBasicService
    ) { }

  onClick(chapter : Chapter, chapterIndex : Number) {
    this.router.navigate(['chapter', chapterIndex]);
  }

  ngOnInit() {
    this.chapters =     this.one2oneService.getChapters();
  }
}
