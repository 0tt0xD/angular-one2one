import { Component, OnInit, Input } from '@angular/core';
import { Chapter } from 'src/app/models/Chapter';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent implements OnInit {

  @Input() chapter : Chapter;

  constructor() { }

  ngOnInit() {
  }

}
