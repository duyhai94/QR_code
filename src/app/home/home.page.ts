import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    listBtn = [
        {
            icon: 'assets/icon/home/icon-enter.svg',
            text: 'Nhập bảo dưỡng',
            route: '/qr-code'
        },
        {
            icon: 'assets/icon/home/icon-import.svg',
            text: 'Nhập kho',
            route: '/qr-code'
        },
        {
            icon: 'assets/icon/home/icon-accessories.svg',
            text: 'Thêm linh kiện',
            route: '/qr-code'
        },
        {
            icon: 'assets/icon/home/icon-out.svg',
            text: 'Xuất kho',
            route: '/qr-code'
        },
        {
            icon: 'assets/icon/home/icon-maintenance.svg',
            text: 'Xuất bảo dưỡng',
            route: '/qr-code'
        },
        {
            icon: 'assets/icon/home/icon-search.svg',
            text: 'Tra cứu',
            route: '/qr-code'
        },
        {
            icon: 'assets/icon/home/icon-file.svg',
            text: 'Danh sách',
            route: '/list'
        }

    ]
    constructor() { }

}
