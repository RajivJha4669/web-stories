import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-amp-story-player',
  templateUrl: './amp-story-player.component.html',
  styleUrls: ['./amp-story-player.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AmpStoryPlayerComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const player = document.querySelector('amp-story-player');

    player?.addEventListener('story-navigation', (event) => {
      console.log('Story navigated to: ', event);
    });

    player?.addEventListener('story-end', () => {
      console.log('Story playback ended');
    });
  }
}
