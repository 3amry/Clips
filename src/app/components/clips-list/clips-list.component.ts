import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.scss'],
  providers: [DatePipe],
})
export class ClipsListComponent implements OnInit, OnDestroy {
  @Input() scrollable = true;

  constructor(public clipService: ClipService) {
    this.clipService.getClips();
  }

  ngOnInit(): void {
    if (this.scrollable) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  ngOnDestroy() {
    if (this.scrollable) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    this.clipService.pageClips = [];
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

    if (bottomOfWindow) {
      this.clipService.getClips();
    }
  };
}
