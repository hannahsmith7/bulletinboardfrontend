import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { BulletinpostServiceService } from '../bulletinpost-service.service';

@Component({
  selector: 'app-bulletinpost-display',
  templateUrl: './bulletinpost-display.component.html',
  styleUrls: ['./bulletinpost-display.component.css']
})
export class BulletinpostDisplayComponent implements OnInit{

  bulletinpost:{_id:string, title:string, description:string, departments: [], status: string}[] = [];

  constructor(public bulletinpostservice: BulletinpostServiceService){}
  private bulletinpostsubscription!: Subscription;

  ngOnInit() {
    this.bulletinpostservice.getbulletinpost_service();
    this.bulletinpostsubscription = this.bulletinpostservice.getUpdateListener()
    .subscribe((bulletinpost:{_id:string, title:string, description:string, departments: [], status: string}[])=>
    {
      console.log(bulletinpost);
      this.bulletinpost = bulletinpost;
    });
  }

  ngOnDestroy()
  {
    this.bulletinpostsubscription.unsubscribe();
  }

  ondelete(bulletinpostid: string)
  {
    this.bulletinpostservice.deletebulletinpost_service(bulletinpostid)
  }

}
