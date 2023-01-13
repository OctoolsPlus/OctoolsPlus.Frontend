import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { video } from '../models/video';
import videoDetails from '../models/videoDetails';
var httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '';

constructor(private http: HttpClient) {}

async getDetailsVideo(urlVideo: string): Promise<videoDetails | undefined> {
  const body = {
    url: urlVideo
  };

  try {
    const response = await this.http.post<videoDetails>(this.url, body).toPromise();
    return response;
  } catch {
    return undefined;
  }
}

 
  downloadVideo(idVideo: string, format: string, quality: string, fileName: string): Promise<any> {
    const apiurl = "http://localhost:3000/download-video/";
    const params = { idVideo, format, quality };
    return new Promise((resolve, reject) => {
        this.http.get(apiurl, {params, responseType: 'blob'}).subscribe(response => {
        if(response) {
            // cria uma url de objeto
            const fileURL = URL.createObjectURL(response);
            // cria um elemento <a> 
            const a = document.createElement('a');
            a.href = fileURL;
            a.download = `${fileName}.mp4`;
            a.click();
            // revoga a url do objeto
            URL.revokeObjectURL(fileURL);
            // extrai informações de detalhes de vídeo a partir da resposta
            resolve(response);
        } else {
            reject(`Não foi possível fazer download do vídeo.`);
        }
        },
        error => {
            reject(error);
        });
    });
}




}
