import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoviesComponent, MovieComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-app';
  shouldDisplayMovie: boolean = true;

  toggleMovieComponent() {
    this.shouldDisplayMovie = !this.shouldDisplayMovie;
  }
  // 1
  // listOfMovies = ['Avangers 1', 'Ironman 2', 'Spiderman'];
  // shouldBeRed = true;
  // mainChar = 'Tony Stark';
  // movie = {
  //   movieName: 'Avangers 2',
  //   rating: 9,
  // };
}
