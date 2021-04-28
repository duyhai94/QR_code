import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-import',
  templateUrl: './list-import.page.html',
  styleUrls: ['./list-import.page.scss'],
})
export class ListImportPage implements OnInit {
  dataCardList = {
    list: [
      {
        serial: {
          label: "Serial",
          value: "123456"
        },
        content: {
          label: "Trạng thái",
          value: "Đang bảo dưỡng"
        }
      },
      {
        serial: {
          label: "Serial",
          value: "123456"
        },
        content: {
          label: "Trạng thái",
          value: "Đang bảo dưỡng"
        }
      },
      {
        serial: {
          label: "Serial",
          value: "123456"
        },
        content: {
          label: "Trạng thái",
          value: "Đang bảo dưỡng"
        }
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
