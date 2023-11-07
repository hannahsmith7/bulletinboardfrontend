import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulletinpostServiceService {

  private bulletinpostdisplay:{_id:string, title:string, description:string, departments: [], status: string}[] = [];
  private updatedbulletinpostdisplay = new Subject<{_id:string, title:string, description:string, departments: [], status: string}[]>();

  constructor(private http: HttpClient) { }

  addBulletinpost_service(title:string, description:string, departments: [], status: string)
  {
    this.http.post<{message:string,bulletinpost:any}>('https://localhost:3000/api/bulletinpost', {title, description, departments, status})
    .subscribe((thebulletinpost)=>
    {
      this.bulletinpostdisplay.push(thebulletinpost.bulletinpost);
      this.updatedbulletinpostdisplay.next([...this.bulletinpostdisplay]);
    })
  }

  getbulletinpost_service()
  {
    this.http.get<{message:string,bulletinpost:any}>('https://localhost:3000/api/bulletinpost')
    .subscribe((thebulletinpost)=>
    {
      this.bulletinpostdisplay = thebulletinpost.bulletinpost;
      
      this.updatedbulletinpostdisplay.next([...this.bulletinpostdisplay]);
    })
  }

  deletebulletinpost_service(bulletinpostid: string)
  {
    this.http.delete('https://localhost:3000/api/bulletinpost/' + bulletinpostid)
    .subscribe(()=>
    {
      const updatedbulletinpostdeleted = this.bulletinpostdisplay.filter(bulletinpost=>bulletinpost._id!==bulletinpostid);
      this.bulletinpostdisplay = updatedbulletinpostdeleted;
      this.updatedbulletinpostdisplay.next([...this.bulletinpostdisplay]);
    })
  }
  
  getUpdateListener() 
  {
    return this.updatedbulletinpostdisplay.asObservable();
  }
}

