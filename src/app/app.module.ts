import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrugSearchComponent } from './drug-search/drug-search.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { DrugDataService } from './shared/drug-data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugSearchComponent,
    DrugDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DrugDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
