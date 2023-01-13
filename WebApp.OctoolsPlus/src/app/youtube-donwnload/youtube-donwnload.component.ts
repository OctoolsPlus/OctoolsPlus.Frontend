import { Component, OnInit } from '@angular/core';
import { video } from '../models/video';
import videoDetails from '../models/videoDetails';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-youtube-donwnload',
  templateUrl: './youtube-donwnload.component.html',
  styleUrls: ['./youtube-donwnload.component.css']
})
export class YoutubeDonwnloadComponent implements OnInit {

  constructor(private apiYoutubeDownload:ApiService) { }
public url : string = "";
public videoData: videoDetails = new videoDetails();
public load: boolean = false;
public loadButton = false;

ngOnInit(): void {
  this.videoData = new videoDetails();
}

async getDetailsVideo() {
  this.load = true;
  this.videoData = new videoDetails();
  const data = await this.apiYoutubeDownload.getDetailsVideo(this.url);
  if (data) {
    data.formats.forEach(item => item.loading = false);
    this.videoData = data;
  } 
  console.log(this.videoData)
  this.load = false;
}

async downloadVideo(idVideo: string, format: string, quality:string, fileName: string) {
  if(!this.videoData){
      console.log('Video Data is null or undefined')
      return;
  }
  try {
      this.videoData.formats.map(item => {
          if(item.format === format && item.quality === quality)
              item.loading = true;
      });
      
      await new Promise((resolve, reject) => {
          this.apiYoutubeDownload.downloadVideo(idVideo, format, quality, fileName)
              .then(resolve)
              .catch(reject)
      });

      this.videoData.formats.map(item => {
          if(item.format === format && item.quality === quality)
              item.loading = false;
      });
  } catch(error) {
      console.error(error);
  }
}





 
}

