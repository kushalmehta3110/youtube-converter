import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {DataService} from '../app/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = new FormControl('');
  urlMobile = new FormControl('');
  title = 'youtube-converter';

  constructor(private dataService : DataService)
  {
    
  }
  generateSongURL()
  {
    const youtubeURL : string = this.url.value
    if(!youtubeURL)
    {
      alert("No Url entered")
    }
    else
    {
      let youtubeId = youtubeURL.toString().split("v=")[1]
      this.dataService.getData(youtubeId).subscribe((data : any)=>{
        if(data && data.link)
        {
          this.downloadMp3(data.link)
        }
        else
        {
          alert("There is some issue with URL")
        }
      },(error)=>{
        alert("something went wrong, please check the error  : "+ error)
      })
    }
    
  }

  generateSongURLMobile()
  {
    const youtubeURL : string = this.urlMobile.value
    if(!youtubeURL)
    {
      alert("No Url entered")
    }
    else
    {
      let youtubeId = youtubeURL.toString().split("\/")[3]
      debugger;
      if(youtubeId.includes("?"))
      {
        youtubeId = youtubeId.split("?")[0]
      }
      this.dataService.getData(youtubeId).subscribe((data : any)=>{
        if(data && data.link)
        {
          this.downloadMp3(data.link)
        }
        else
        {
          alert("There is some issue with URL")
        }
      },(error)=>{
        alert("something went wrong, please check the error  : "+ error)
      })
    }
  }

  downloadMp3(linkURL : string): void {
    const date = new Date()
    const link = document.createElement('a');
    link.href = linkURL;
    link.download = date + '_file.mp3';
   // link.target = '_blank'; // Open in a new tab/window
    link.click();
  }
}
