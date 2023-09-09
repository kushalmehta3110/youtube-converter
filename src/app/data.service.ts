import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://youtube-mp36.p.rapidapi.com/dl';

  constructor(private http: HttpClient) { }

  getData(youTubeId : string): Observable<any[]> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'f236833c5bmsh72ec6426d98a196p1ddeb9jsn70f0f8b14635',
      'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
    });
    const params = new HttpParams()
    .set('id',youTubeId )
    return this.http.get<any[]>(this.apiUrl,{headers,params});
  }

}
