import { Component, OnInit } from '@angular/core';
import {
  NgxStoriesComponent,
  NgxStoriesOptions,
  StoryGroup,
} from 'ngx-stories';
@Component({
  selector: 'app-webstories',
  templateUrl: './webstories.component.html',
  styleUrls: ['./webstories.component.css'],
  imports: [NgxStoriesComponent],
})
export class WebstoriesComponent {
  installIcon: string = 'assets/images/copy.png';
  storyOptions: NgxStoriesOptions = {
    // Tweak these options as needed
    // width: 338,
    // height: 600,
    // currentStoryIndex: 0,
    // currentStoryGroupIndex: 0,
    backlitColor: '#1b1b1b',
  };
  storyGroups: StoryGroup[] = [
    {
      id: 1,
      name: 'Steve Smith',
      stories: [
        {
          id: 1,
          type: 'image',
          content: 'https://i.ibb.co/ZMVy3KN/pexels-rpnickson-2486168.jpg',
        },
        {
          id: 3,
          type: 'video',
          content:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
        {
          id: 4,
          type: 'video',
          content: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
        {
          id: 5,
          type: 'video',
          content:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        },
        {
          id: 6,
          type: 'image',
          content:
            'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'John Doe',
      stories: [
        {
          id: 1,
          type: 'image',
          content:
            'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/4.jpg',
        },
        {
          id: 2,
          type: 'image',
          content:
            'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/5.jpg',
        },
        {
          id: 3,
          type: 'video',
          content:
            'https://videos.pexels.com/video-files/28759029/12469290_1920_1080_25fps.mp4',
        },
        {
          id: 4,
          type: 'video',
          content:
            'https://videos.pexels.com/video-files/28985119/12537126_1920_1080_24fps.mp4',
        },
        {
          id: 5,
          type: 'video',
          content:
            'https://videos.pexels.com/video-files/28496760/12399731_1440_2560_30fps.mp4',
        },
      ],
    },
  ];

  triggerOnEnd() {
    this.storyGroups = [];
    this.storyGroups = [
      {
        id: 1,
        name: 'Steve Smith',
        stories: [
          {
            id: 1,
            type: 'image',
            content: 'https://i.ibb.co/ZMVy3KN/pexels-rpnickson-2486168.jpg',
          },
          {
            id: 3,
            type: 'video',
            content:
              'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
          {
            id: 4,
            type: 'video',
            content: 'https://www.w3schools.com/html/mov_bbb.mp4',
          },
          {
            id: 5,
            type: 'video',
            content:
              'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          },
          {
            id: 6,
            type: 'image',
            content:
              'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
          },
        ],
      },
      {
        id: 2,
        name: 'John Doe',
        stories: [
          {
            id: 1,
            type: 'image',
            content:
              'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/4.jpg',
          },
          {
            id: 2,
            type: 'image',
            content:
              'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/5.jpg',
          },
          {
            id: 3,
            type: 'video',
            content:
              'https://videos.pexels.com/video-files/28759029/12469290_1920_1080_25fps.mp4',
          },
          {
            id: 4,
            type: 'video',
            content:
              'https://videos.pexels.com/video-files/28985119/12537126_1920_1080_24fps.mp4',
          },
          {
            id: 5,
            type: 'video',
            content:
              'https://videos.pexels.com/video-files/28496760/12399731_1440_2560_30fps.mp4',
          },
        ],
      },
    ];
  }

  triggerOnExit() {
    console.log('Exit');
  }

  triggerOnStoryGroupChange(storyGroup: number) {
    console.log('currentStoryGroupDetails', storyGroup);
  }

  currentStoryDetails(eventData: object) {
    console.log('currentStoryDetails', eventData);
  }

  copyCommand() {
    navigator.clipboard.writeText('npm i ngx-stories');
    this.installIcon = 'assets/images/copy-done.svg';
    setTimeout(() => {
      this.installIcon = 'assets/images/copy.png';
    }, 3000);
  }
}
