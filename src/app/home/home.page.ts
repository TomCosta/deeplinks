import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products = [{
    id: 425345,
    name: "Group Pieces",
    img: "/assets/imgs/parts1.jpg"
  },
  {
    id: 890223,
    name: "Light Piece",
    img: "/assets/imgs/parts2.jpg"
  }];

  constructor(
    private socialSharing: SocialSharing    
  ){    
  }

  share(message, subject, url) {
    this.socialSharing.share(message, subject, null, url).then(() => {
      // Sharing via is possible
    }).catch(() => {
      // Sharing via is not possible
    });
  }

}
