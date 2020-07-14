import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class GetMovieService {

url="http://www.omdbapi.com/?i=tt3896198&apikey=362408ae";

  constructor(private http: HttpClient) {
   
   }

getMovie(){
  return this.http.get(this.url);
}

  //  getMovies(){
  //   let obs= this.http.get(this.url);
  //   obs.subscribe(data)=> console.log(data))
  //  }
}
