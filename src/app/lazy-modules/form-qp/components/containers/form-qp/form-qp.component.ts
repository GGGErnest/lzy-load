import { Component, OnInit } from '@angular/core';
import { QpRoot } from 'src/app/modules/form-qp/classes/qp-root';
import { QpBuilderService } from 'src/app/modules/form-qp/services/qp-builder.service';
import { QpGroup } from 'src/app/modules/form-qp/classes/qp-group';

@Component({
  selector: 'app-form-qp',
  templateUrl: './form-qp.component.html',
  styleUrls: ['./form-qp.component.scss']
})
export class FormQpComponent implements OnInit {

  qpRoot: QpRoot;
  formGroupQPSettings = {autoUpdating: true, isRoot: true, replaceState: false};
  showAddress3 = false;

  constructor(private qpBuilderService: QpBuilderService) {
    this.qpRoot = this.qpBuilderService.qpRoot({autoUpdating: false, replaceState: false}, {
      username: this.qpBuilderService.qpFormControl(),
      password: this.qpBuilderService.qpFormControl(),
      addresses: this.qpBuilderService.qpGroup({
        address1: this.qpBuilderService.qpGroup({
          address: this.qpBuilderService.qpFormControl(),
          state: this.qpBuilderService.qpFormControl(),
          country: this.qpBuilderService.qpFormControl(),
        }),
        address2: this.qpBuilderService.qpGroup({
          address: this.qpBuilderService.qpFormControl(),
          state: this.qpBuilderService.qpFormControl(),
          country: this.qpBuilderService.qpFormControl(),
        })
      })
    });
  }

  ngOnInit() {

  }

  toogleAddress3() {
    if (!this.showAddress3) {
      const addressGroup = this.qpBuilderService.qpGroup({
        address: this.qpBuilderService.qpFormControl(),
        state: this.qpBuilderService.qpFormControl(),
        country: this.qpBuilderService.qpFormControl(),
      });
      (this.qpRoot.qpGroup.get('addresses') as QpGroup).addControl('address3', addressGroup );
      this.showAddress3 = true;
    } else {
      (this.qpRoot.qpGroup.get('addresses') as QpGroup).removeControl('address3');
       this.showAddress3 = false;
    }
  }

  updateQp(){
    this.qpRoot.updateUrl();
  }

}
