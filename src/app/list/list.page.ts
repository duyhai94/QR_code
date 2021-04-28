import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
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
