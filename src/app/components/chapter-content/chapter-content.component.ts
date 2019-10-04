import { Component, OnInit, Input } from '@angular/core';
import { Chapter } from '../../models/Chapter';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.css']
})
export class ChapterContentComponent implements OnInit {

  @Input() chapter : Chapter; 

  constructor() { }

  ngOnInit() {
  }

}
