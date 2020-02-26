import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import * as fileSaver from 'file-saver';
import {switchMap} from 'rxjs/operators';

import {faWifi,faEnvelope,faPhoneAlt,faRupeeSign,faStar,faShareAlt,faDownload,faLocationArrow,faSpinner} from '@fortawesome/free-solid-svg-icons';
import { IspService } from 'src/app/isp.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-isp',
  templateUrl: './isp.component.html',
  styleUrls: ['./isp.component.css']
})
export class IspComponent implements OnInit{
  faWifi =faWifi;
  faPhone =faPhoneAlt;
  faMail=faEnvelope;
  faMoney=faRupeeSign;
  faStar=faStar;
  faShare=faShareAlt;
  faDownload=faDownload;
  faLocation=faLocationArrow;
  faSpinner = faSpinner;
  
  constructor(private ispService :IspService,private route:ActivatedRoute,private router:Router) { }
  apiUrl = environment.apiUrl+'images/';
  isp={};
  starList =[];
  isLoading=false;
  ngOnInit() {
    this.route.paramMap.subscribe((params :ParamMap)=>{
      this.starList=[];
      this.isLoading=true;
      this.ispService.getIsp(params.get('id')).subscribe(isp=>{
        console.log(isp);
        this.isp=isp['data'];
        this.isLoading=false;
        for(var i=0;i<5;i++){
          if(i<this.isp['rating']){
            this.starList.push(true);
          }
          else{
            this.starList.push(false);
          }
        }
        console.log(this.starList);
      })
    } );

  }
  onSave(){
    console.log('clicked');
    var card = document.getElementsByClassName('card');
    var blob = new Blob([this.isp['name'],this.isp['description'],this.isp['max_speed'],this.isp['lowest_price'],this.isp['rating'],this.isp['url'],this.isp['email'],this.isp['contact_number']], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, this.isp['name']+".txt");
    // fileSaver.saveAs()
  }
  close(){
    this.router.navigate(['/']);
  }
}
