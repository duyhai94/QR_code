import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../common/loadding.service';
@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.page.html',
    styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

    isShow = false;
    constructor(
        private http: HttpClient,
        private serviceLoading: LoadingService
    ) { }
    listMaintenance: any = [];
    listMaintenanceSub: any = [];
    statusText = 'Tất cả'

    ngOnInit() {
        this.serviceLoading.openLoading();
        this.http.get(`https://5f508ff82b5a260016e8bae9.mockapi.io/maintenance`).subscribe(res => {
            this.listMaintenance = res;
            this.listMaintenance.reverse();
            this.listMaintenanceSub = this.listMaintenance;
        }, () => { }, () => {
            this.serviceLoading.closeLoading();
        })
    }

    checkSearch = () => {
        this.isShow = !this.isShow;
    }

    hideSearch = () => {
        this.isShow = false;
    }

    changeFunction = (value) => {
        if (value.detail.value == 'null') return this.listMaintenanceSub = this.listMaintenance, this.statusText = 'Tất cả';
        this.listMaintenanceSub = this.listMaintenance.filter(x => x.trang_thai === value.detail.value);
        this.statusText = value.detail.value;
    }

    searchInputChanged = (value) => {
        this.listMaintenanceSub = this.listMaintenance.filter(
            (a) => a.id.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

}
