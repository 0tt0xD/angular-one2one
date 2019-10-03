import { Component, OnInit, Input } from '@angular/core';
import { SubChapter } from '../../models/SubChapter';

@Component({
  selector: 'app-sub-chapter',
  templateUrl: './sub-chapter.component.html',
  styleUrls: ['./sub-chapter.component.css']
})
export class SubChapterComponent implements OnInit {

  @Input() subChapter : SubChapter

  constructor() { }

  ngOnInit() {
  }

}
