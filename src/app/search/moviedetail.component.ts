import { Component, Inject } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
})

export class MoviedetailComponent {
  allDetails: MovieModel[] = [];
  imagebaseUrl: string = 'http://ec2-3-15-238-225.us-east-2.compute.amazonaws.com:3000/v1/image/';
  constructor(private dialogRef: MatDialogRef<MoviedetailComponent>, @Inject(MAT_DIALOG_DATA) public data) {
  this.allDetails = data.allDetails;
  }

  dialogLike(){
    this.dialogRef.close(this.allDetails);
  }

  dialogExit(){
    this.dialogRef.close(null);
  }

}

