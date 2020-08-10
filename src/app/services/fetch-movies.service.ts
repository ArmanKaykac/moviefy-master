import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {searchInfo, MovieModel} from '../models/movie.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchMoviesService {
  baseUrl: string = 'http://ec2-3-15-238-225.us-east-2.compute.amazonaws.com:3000/v1/movie';
  postUrl: string = 'http://ec2-3-15-238-225.us-east-2.compute.amazonaws.com:3000/v1/oneri'
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) {}

  pushMovies(data: MovieModel[], sortType: string) {
    return this.http.post(this.postUrl,
      {data: data, sort: sortType});
  }

  getDetails(id: number){
    return this.http.get<MovieModel>(this.baseUrl + '/' + id);
  }

  searchGetCall(term: string) {
    if (term === ''){
      return of ([]);
    }
    return this.http.get<searchInfo[]>(this.baseUrl + this.queryUrl + term);
  }
}
