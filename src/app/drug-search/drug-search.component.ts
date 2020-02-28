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

    this.drugDataService.getDrugByBrandName(this.search.text).subscribe((drugs) => {
      this.drugList = drugs;
    });
  }

  selectDrug(drug : Drug){
    this.selectedDrug = drug;
  }
}
