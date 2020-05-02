import { Component, OnInit } from '@angular/core';

import { Item } from '../../interfaces/item';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

    data: Item[];
    selectedInterval: number;
    intervals = [ 6, 4, 24 ];

    constructor() {}

    ngOnInit(): void {
        this.data = [];
        this.selectedInterval = this.intervals[0];
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
