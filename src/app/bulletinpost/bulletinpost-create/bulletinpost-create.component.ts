import { Component , OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { BulletinpostServiceService } from '../bulletinpost-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulletinpost-create',
  templateUrl: './bulletinpost-create.component.html',
  styleUrls: ['./bulletinpost-create.component.css']
})
export class BulletinpostCreateComponent implements OnInit{

  constructor(public bulletinpostservice: BulletinpostServiceService, public router: Router){}

  ngOnInit(): void {
    
  }

  onaddbulletinpost(bulletinpostform: NgForm){
    if (bulletinpostform.invalid)
    {
      alert('Invalid!')
      return
    }

    this.bulletinpostservice.addBulletinpost_service(
      bulletinpostform.value.title,
      bulletinpostform.value.description,
      bulletinpostform.value.departments,
      bulletinpostform.value.status,
    )

    bulletinpostform.resetForm()
    this.router.navigate(['/'])
  }

}
