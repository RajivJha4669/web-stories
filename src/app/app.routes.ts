import { Routes } from '@angular/router';
import { WebstoriesComponent } from './webstories/webstories.component';
import { AmpStoryPlayerComponent } from './amp-story-player/amp-story-player.component';

export const routes: Routes = [
  {
    path: '',
    component: WebstoriesComponent,
  },
  {
    path: 'apm-story',
    component: AmpStoryPlayerComponent,
  },
];
