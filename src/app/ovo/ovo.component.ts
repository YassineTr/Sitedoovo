import { Component, OnInit } from '@angular/core';
import {IImage} from '../slideshow/IImage';

@Component({
  selector: 'app-ovo',
  templateUrl: './ovo.component.html',
  styleUrls: ['./ovo.component.scss']
})
export class OvoComponent implements OnInit {

    title = 'Template3Site';
    imageUrls: (string | IImage)[] = [
        { url: '../../assets/img/slide1.jpg', caption: '' },
        { url: '../../assets/img/slide2.jpg', clickAction: () => alert('custom click function') },
        { url: '../../assets/img/slide3.jpg' },

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

    ngOnInit(): void {
    }

}
