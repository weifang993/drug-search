import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Drug } from '../shared/drug-data.model';

@Injectable({
    providedIn: 'root',
})

export class DrugDataService {
    host = '192.168.99.100';
    port = 32500;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getDrugByBrandName(serachText: string) : Observable<Drug[]> {
        // return an Observable for a list of drugs by brand name
        return this.http.get<Drug[]>('http://' + this.host + ':' + this.port + '/api/drugs/brand_name/' + serachText)
    }
  
}


