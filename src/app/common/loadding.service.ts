import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor(
        public loadingController: LoadingController
    ) { }
    loading: any;

    openLoading = async () => {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 5000
        });
        await loading.present();
        return loading;
    }

    closeLoading = async () => {
        await this.loadingController.dismiss();
        return true;
    }
}
