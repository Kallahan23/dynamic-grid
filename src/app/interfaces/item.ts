export interface Item {
    name: string;
    units: string;
    values: {
        time: string;
        value: string;
    }[];
}

export interface BasicItem {
    name: string;
    time: string;
    value: string;
}
