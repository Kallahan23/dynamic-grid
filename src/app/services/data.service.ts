import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BasicItem } from '../interfaces/item';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() {}

    save(data: BasicItem[]) {
        console.log(data);
    }
}
