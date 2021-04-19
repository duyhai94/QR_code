import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    listBtn = [
        {
            icon: 'assets/icon/AssetManagement.svg',
            text: 'Quản lý tài sản',
            route: '/maintenance'
        },
        {
            icon: 'assets/icon/Maintenance.svg',
            text: 'Bảo dưỡng',
            route: '/maintenance'
        },
        {
            icon: 'assets/icon/Warehouse.svg',
            text: 'Kho hàng',
            route: '/maintenance'
        },
        {
            icon: 'assets/icon/Report.svg',
            text: 'Báo cáo',
            route: '/maintenance'
        },
        {
            icon: 'assets/icon/Setting.svg',
            text: 'Cài đặt',
            route: '/tab3'
        }
    ]
    constructor() { }

}
