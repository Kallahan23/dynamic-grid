import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() {}

    save(data: any[]) {
        console.log(data);
    }
}
