import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FetchMoviesService} from '../services/fetch-movies.service';
import {fromEvent} from 'rxjs';
import {MovieModel, searchInfo} from '../models/movie.model';
import { distinctUntilChanged } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MoviedetailComponent} from './moviedetail.component';
declare let alertify: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FetchMoviesService]
})

export class SearchComponent implements OnInit {
  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;
  imagebaseUrl: string = 'http://ec2-3-15-238-225.us-east-2.compute.amazonaws.com:3000/v1/image/';
  searchResults: searchInfo[] = [];
  suggestedMovies: searchInfo[] = [];
  likedMovies: MovieModel[] = [];
  sortType = 'title';
  isSearching: boolean;
  
  onClick2(id:number,title:string){
    alertify.success( title + 'Begenilere eklendi.');
    this.fetchMoviesService.getDetails(id).subscribe(res => {
    this.likedMovies.push(res);
    this.pushMovies();
  });
  }

  constructor(private dialog: MatDialog, private http: HttpClient, private fetchMoviesService: FetchMoviesService,
  ){
    this.isSearching = false;
  }

  getDetailsInDialog(id:number) {
    this.fetchMoviesService.getDetails(id).subscribe(res => {
      const dialogConfig = new MatDialogConfig;
      dialogConfig.data = {
        id: res.id,
        title: res.title,
        overview: res.overview,
        release_date: res.release_date,
        s: res.poster_path,
        vote_average: res.vote_average,
        allDetails: res
    };
      const dialogRef = this.dialog.open(MoviedetailComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((res) => {
          if(res != null) {
          this.likedMovies.push(res);
          this.pushMovies();
          alertify.success(res.title + 'Begenilere eklendi.');
        }});
    })
  }

  pushMovies() {
      this.fetchMoviesService.pushMovies(this.likedMovies, this.sortType).subscribe((res:searchInfo[]) => {
      this.suggestedMovies = res;
      console.log(this.suggestedMovies);
       },
      (error) => {
       console.error('error caught in component');
       this.suggestedMovies['data'] = null;
       })
  }

  alertifyWarn(title:string) {
    alertify.notify(title + 'listenden çıkarıldı', 'custom', 2, function()
      {
        console.log('dismissed');
      }
      );
  }

  ngOnInit() {
      this.fetchMoviesService.searchGetCall('A').subscribe((res: searchInfo[]) => {
      this.searchResults = res;
    });

    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(map((event:any) => {
    return event.target.value;
    })
      ,debounceTime(100)
      ,distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;
      this.fetchMoviesService.searchGetCall(text)
        .subscribe((res: searchInfo[]) => {
          this.isSearching=false;
          this.searchResults=res;
  }, (err) =>{
      this.isSearching = false;
      console.log('error',err);
      });
    });

  };
  }
