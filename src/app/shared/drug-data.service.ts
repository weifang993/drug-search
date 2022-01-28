import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Drug } from '../shared/drug-data.model';

@Injectable({
    providedIn: 'root',
})

export class DrugDataService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getDrugByBrandName(serachText: string) : Observable<Drug[]> {
        // for openshift test
        // host will be replace by tekton pipelines
        let url: string = 'HTTP_OR_HTTPS' + '://' + 'DPD_SERVER_HOSTNAME' + '/api/drugs/brand_name/' + serachText;        
        return this.http.get<Drug[]>(url)
    }
  
}


