import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { SidebarModule} from 'ng-sidebar';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatDialogModule, MatSidenavModule} from '@angular/material';
import { FooterComponent } from './shared/layout/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule}  from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {ChangecolorClickDirective} from './search/changecolor-click.directive';
import {MatIconModule} from '@angular/material/icon';
import {MoviedetailComponent} from './search/moviedetail.component';
import {MaterialElevationDirective} from './search/material-elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchComponent,
    MoviedetailComponent,
    MaterialElevationDirective,
    ChangecolorClickDirective,
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    SidebarModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
entryComponents: [MoviedetailComponent]
})
export class AppModule { }
