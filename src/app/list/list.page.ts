import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  code;

  constructor(
    private activatedRoute: ActivatedRoute,
  ){
  }

  ngOnInit() {
    this.code = JSON.parse(this.activatedRoute.snapshot.paramMap.get('data'));
    console.log('Data code: ', this.code);
  }
}
