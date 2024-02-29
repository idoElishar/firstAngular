import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  standalone: true,
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  imports: [MovieComponent],
})
export class MoviesComponent implements OnInit,OnChanges,OnDestroy {
  title = 'movies work';
  @Input() listOfMovies!: string[];
  ngOnInit() {
    console.log('movies on init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngAfterViewInit(){
    console.log("afterview init");
  }
  ngOnDestroy():void{
    console.log('movies on destroy');
  }
}
