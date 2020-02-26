import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IspService {
  ispCount=new BehaviorSubject(null);
  constructor(private http : HttpClient) {
    this.http.get(environment.apiUrl +'isp/').subscribe((results)=>{
      this.ispCount.next(results['totalIsp']);
     
    })
  }
  getIspProviders(queryParams){
    if(queryParams){
      return this.http.get(environment.apiUrl+'isp?sort='+queryParams);
    }
    return this.http.get(environment.apiUrl+'isp/');
    
  }
  getIsp(id :string){
    return this.http.get(environment.apiUrl+'isp/'+id);
  }
}
