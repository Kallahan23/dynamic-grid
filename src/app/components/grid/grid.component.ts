import { Component, OnInit } from '@angular/core';

import { Item, BasicItem } from '../../interfaces/item';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

    data: Item[];
    selectedInterval: number;
    intervals = [ 6, 4, 24 ];
    availableTimes = Array(24).fill(0).map((x, i) => `${i}:00`.padStart(5, '0'));

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.data = [];
        this.selectedInterval = this.intervals[0];
    }

    addItem(): void {
        const newItem = {
            name: '',
            units: '',
            values: [],
        };
        newItem.values = this.availableTimes.map(time => {
            return {
                time,
                value: ''
            };
        });
        this.data.push(newItem);
    }

    saveForm() {
        this.dataService.save(this.mapData());
    }

    mapData(): BasicItem[] {
        const mappedData: BasicItem[] = [];

        this.data.forEach((item) => {
            item.values.forEach((value) => {
                if (value.value.length > 0) {
                    mappedData.push({
                        name: item.name,
                        time: value.time,
                        value: value.value,
                    });
                }
            });
        });

        return mappedData;
    }
}
