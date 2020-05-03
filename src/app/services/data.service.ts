import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { BasicItem } from '../interfaces/item';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    save(data: BasicItem[]): Observable<any> {
        /* TODO post using http
        return this.http.post('/api/data', { data }).pipe(
            tap(_ => console.log(`Posted: ${data}`))
        );
        */
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data, 'Data saved to local storage');
        return of({ success: true });
    }
}
