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
        // host and port will be replace by tekton pipelines
        let host: string = 'DPD_SERVER_HOSTNAME'; 
        let port: number = 80;

        let url: string = 'http://' + host + ':' + port + '/api/drugs/brand_name/' + serachText;
        if( host.startsWith("http")){
            url = host + ':' + port + '/api/drugs/brand_name/' + serachText;
        }
        
        return this.http.get<Drug[]>(url)
    }
  
}


