import { Component, OnInit, Input } from '@angular/core';
import { SubChapter } from '../../models/SubChapter';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  @Input() subChapter : SubChapter

  constructor() { }

  ngOnInit() {
  }

}
