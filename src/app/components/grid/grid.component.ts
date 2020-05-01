import { Component, OnInit } from '@angular/core';

import { Item } from '../../interfaces/item';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

    data: Item[];

    constructor() {}

    ngOnInit(): void {
        this.data = [];
    }

    addItem(): void {
        this.data.push({
            name: '',
            units: '',
            values: [{
                time: '',
                value: ''
            }]
        });
    }
}
