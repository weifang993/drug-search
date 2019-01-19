import { Component, OnInit } from '@angular/core';
import { DrugDataService } from '../shared/drug-data.service';
import { Search, Drug } from '../shared/drug-data.model';

@Component({
  selector: 'app-drug-search',
  templateUrl: './drug-search.component.html',
  styleUrls: ['./drug-search.component.css']
})
export class DrugSearchComponent implements OnInit {
  selectedDrug : Drug;
  drugList : Drug[];
  
  // search criteria
  search : Search;  

  constructor(private drugDataService : DrugDataService) {  
    this.drugDataService = drugDataService;
    this.drugList = [];
  }

  ngOnInit() {  
    this.search = new Search();
    this.search.text = "";
  }

  searchDrug(){ 
    this.selectedDrug = null;
    this.drugList = [];
    console.log("search - type: " + this.search.type + " search: " + this.search.text);

    this.drugDataService.getDrugByBrandName(this.search.text).subscribe((drugs) => {
      this.drugList = drugs;
    });
  }

  foundDrugs(){
    /*
    if(this.drugList && this.drugList.length > 0){
      console.log('found drugs: ' + this.drugList.length);
      return true;
    }
    return false;
    */
  }

  selectDrug(drug : Drug){
    this.selectedDrug = drug;
  }
}
