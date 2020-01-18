import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'DeepLinks',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Landing Page',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deeplinks: Deeplinks,
    private platform: Platform,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => { 
      this.deeplinks.route({
        '/list/:productId': 'ListPage'
      }).subscribe((match) => {
        this.router.navigate(['/list', { data: JSON.stringify(match.$args.productId)} ]);
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        // alert(JSON.stringify(match));
        console.log('Successfully matched route', match);
      },
      (nomatch) => {
        // nomatch.$link - the full link data
        alert(JSON.stringify(nomatch));
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
	    });
  }
}
