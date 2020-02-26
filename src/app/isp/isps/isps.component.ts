import { Component, OnInit } from '@angular/core';
import {faSortAmountUp} from '@fortawesome/free-solid-svg-icons'
import { IspService } from 'src/app/isp.service';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-isps',
  templateUrl: './isps.component.html',
  styleUrls: ['./isps.component.css']
})
export class IspsComponent implements OnInit {
  faSort = faSortAmountUp;
  ispProviders=[];
  queryParam =undefined;
  apiUrl = environment.apiUrl;
  constructor(private ispService :IspService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params.sort);
      this.queryParam = params.sort;
      this.ispService.getIspProviders(this.queryParam).subscribe((result)=>{
        this.ispProviders=result['data'];
        // console.log(this.ispProviders);
       })
    })

  
  }
  onClick(value){
  this.router.navigate(['/isp'],{
    queryParams:{
      sort:value
    }
  })
  }

}
