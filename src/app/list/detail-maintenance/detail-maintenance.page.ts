import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCreateComponent } from 'src/app/base/modal/modal.component';
import { LoadingService } from 'src/app/common/loadding.service';

@Component({
  selector: 'app-detail-maintenance',
  templateUrl: './detail-maintenance.page.html',
  styleUrls: ['./detail-maintenance.page.scss'],
})
export class DetailMaintenancePage implements OnInit {
  detailGoods = {
    title: 'Hàng hoá',
    type: 'card',
    data: [
        { name: 'Tên hàng hoá', value: 'Vỏ keg', class: 'col-6' },
        { name: 'Serial', value: '165106546844', class: 'col-6' },
    ],
};
detailInfo = {
    title: 'Thông tin',
    type: 'card',
    data: [
        { name: 'Đơn vị xử lý', value: 'Phân xưởng 1', class: 'col-12' },
        { name: 'Người tạo', value: 'Nguyễn Văn A', class: 'col-12' },
        { name: 'Thời gian tạo', value: '23:59:59, 15/04/2021', class: 'col-12' },
    ],
};
detailAccessories = {
    title: 'Linh kiện sử dụng',
    type: 'table',
    columns: [
        {
            condition: 'accessoriesName',
            label: 'Linh kiện',
            type: 'text',
        },
        {
            condition: 'value',
            label: 'Số lượng',
            type: 'number',
        },
        {
            condition: 'date',
            label: 'Thời gian',
            type: 'date',
        },
    ],
    data: [
        {
            accessoriesName: 'Nắp van',
            value: 1,
            date: new Date(),
        },
        {
            accessoriesName: 'Vỏ nắp',
            value: 1,
            date: new Date(),
        },
    ],
    btnCreate: true,
};

detailHistoryAction = {
    title: 'Lịch sử thao tác',
    type: 'table',
    columns: [
        {
            condition: 'date',
            label: 'Thời gian',
            type: 'date',
        },
        {
            condition: 'employee',
            label: 'Nhân viên',
            type: 'text',
        },
        {
            condition: 'action',
            label: 'Hành động',
            type: 'text'
        }
    ],
    data: [
        {
            date: new Date,
            employee: 'Phạm Văn Tuấn',
            action: 'Đổi trạng thái'
        },
    ],
};
detailHistoryMaintenance = {
    title: 'Lịch sử bảo dưỡng',
    type: 'table',
    columns: [
        {
            condition: 'date',
            label: 'Thời gian',
            type: 'date',
        },
        {
            condition: 'employee',
            label: 'Nhân viên',
            type: 'text',
        },
    ],
    data: [
        {
            date: new Date,
            employee: 'Phạm Văn Tuấn',
        },
    ],
};
  constructor(private serviceLoading: LoadingService,
    private modalController: ModalController) { }

  ngOnInit() {
  }
  async createAccessories() {
    const modal = await this.modalController.create({
        component: ModalCreateComponent,
        cssClass: 'modal-create-class',
        componentProps: {
            title: 'Thêm linh kiện sử dụng',
            config: [
                {
                    condition: 'accessoriesName',
                    label: 'Linh kiện',
                    placeholder: 'Nhập tên linh kiện',
                    type: 'text',
                },
                {
                    condition: 'value',
                    label: 'Số lượng',
                    placeholder: 'Nhập số lượng',
                    type: 'number',
                },
            ],
            model: {
                accessoriesName: '',
                value: '',
            },
        },
    });
    modal.onDidDismiss().then((data) => {
        console.log(data.data);
    })

    return await modal.present();
}
}
