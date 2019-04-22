import { Component, OnInit } from '@angular/core';
import {IImage} from '../slideshow/IImage';

@Component({
  selector: 'app-newmap',
  templateUrl: './newmap.component.html',
  styleUrls: ['./newmap.component.scss']
})
export class NewmapComponent implements OnInit {
    title = 'Template3Site';
    imageUrls: (string | IImage)[] = [
        { url: '../../assets/img/leslide1.png', caption: '' },
        { url: '../../assets/img/leslide2.png', clickAction: () => alert('custom click function') },
        { url: '../../assets/img/leslide3.png' },

    ];
    height = '300px';
    minHeight: string;
    arrowSize = '30px';
    showArrows = true;
    disableSwiping = false;
    autoPlay = true;
    autoPlayInterval = 3333;
    stopAutoPlayOnSlide = true;
    debug = false;
    backgroundSize = 'cover';
    backgroundPosition = 'center center';
    backgroundRepeat = 'no-repeat';
    showDots = true;
    dotColor = '#FFF';
    showCaptions = true;
    captionColor = '#FFF';
    captionBackground = 'rgba(0, 0, 0, .35)';
    lazyLoad = false;
    hideOnNoSlides = false;
    width = '100%';
    fullscreen = false;
  ngOnInit() {
  }

}
