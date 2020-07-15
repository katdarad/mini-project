import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private GetMovieService: GetMovieService) { }

  httpdata: any = {};
  data:any

  ngOnInit() {
    this.getMovie();
    this.display_data();
  }

  getMovie(){
    this.GetMovieService.getMovie().subscribe(data=>{data=data;
      console.log(data);
      })
  }
  
  display_data(){
    this.GetMovieService.display_data().subscribe(data=>{this.httpdata = data;})
    // this.httpdata = data;

  }
  

}
