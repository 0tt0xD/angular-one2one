import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../models/Chapter';
import { ActivatedRoute } from '@angular/router';
import { One2OneBasicService } from '../../services/One2OneBasicService';

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.css']
})
export class ChapterViewComponent implements OnInit {

    chapter : Chapter;

  constructor(
      private route : ActivatedRoute,
      private one2oneService : One2OneBasicService
    ) {
      
    this.route.params.subscribe( params => this.setChapter(params['chapterIndex']) );
   }

    ngOnInit() {
    }

    setChapter(index : number) {
        this.chapter = this.one2oneService.getChapter(index);
    }
}
