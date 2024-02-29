import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

export interface Movie {
  name: string;
  mainChar: string;
  rating:number;
  releaseDate:Date;
}

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor() {}
  public movie: Movie = {
    name: 'Star Wars',
    mainChar: 'Tony Stark',
    rating: 7.1,
    releaseDate: new Date(),
  };
  public ChangeMovie(event:Event):void{
    this.movie={
      name: 'Captain Hook',
      mainChar: 'Carol Denvers',
      rating: 8.5,
      releaseDate: new Date(),
    }
  }
}
