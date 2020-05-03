import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Item, BasicItem } from '../../interfaces/item';
import { DataService } from '../../services/data.service';

/**
 * TableComponent
 *
 * Alternative implementation of GridComponent
 * Looks the same, except uses html table instead of css grid
 */
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

    /** Data array */
    data: Item[];
    /** Selected hour interval for table columns to display */
    selectedInterval: number;
    /** Available hour intervals to choose from */
    intervals = [ 6, 4, 24 ];
    /** Array of all hours in day: [ '00:00', '01:00', '02:00' ... '23:00' ] */
    availableTimes = Array(24).fill(0).map((x, i) => `${i}:00`.padStart(5, '0'));

    constructor(
        private dataService: DataService,
        private snackBar: MatSnackBar
    ) {}

    /**
     * ngOnInit
     * Component init lifecycle hook - initialise data
     *
     */
    ngOnInit(): void {
        this.data = [];
        this.selectedInterval = this.intervals[0];
    }

    /**
     * addItem
     * Append empty row to table
     */
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

    /**
     * saveForm
     * Save current form data using data service
     */
    saveForm(): void {
        this.dataService.save(this.mapData()).subscribe(response => {
            if (response.success) {
                this.displayMessage('Form data posted');
            } else {
                this.displayMessage('An error occured when posting the data');
            }
        });
    }

    /**
     * mapData
     * Convert current Item[] data to BasicItem[], ready for posting
     *
     * @returns BasicItem[] Array of form data
     */
    mapData(): BasicItem[] {
        const mappedData: BasicItem[] = [];

        this.data.forEach(item => {
            item.values.forEach(value => {
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

    /**
     * displayMessage
     * Present a message using snackbar
     *
     * @param message String to display
     */
    displayMessage(message: string): void {
        this.snackBar.open(message, 'OK', {
            duration: 4000
        });
    }
}
