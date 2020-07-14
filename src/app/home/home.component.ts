import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private GetMovieService: GetMovieService) { }

  request : any = " ";
  inputText : string = " "

  ngOnInit() {
   this.getMovie();
  }

getMovie(){
  this.GetMovieService.getMovie().subscribe(data=>{data=data;
    console.log(data);
    })
};

search(){
  this
}

  
}
 

