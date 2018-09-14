import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nested-form-example',
  templateUrl: './nested-form-example.component.html',
  styleUrls: ['./nested-form-example.component.css']
})
export class NestedFormExampleComponent implements OnInit {

  @ViewChild('myForm') myForm;
  private list: any = 
  {
    data: [1,2],
    test: [9,8]
  };

  private data = [{ "autoVehicleCoverages": [{ "id": 1160, "quoteId": 1876, "vehicleId": 1323, "vehicleNo": "1", "deductibleCOMP": null, "deductibleCOLL": "1000", "limitTowing": null, "limitRentalReimbursement": null, "liabilityNotRequired": false, "statedAmount": 80, "replacementCost": false, "fullGlass": false, "loanLeaseCoverage": null, "waiverCOLLDamage": null, "needDefaultApply": true }, { "id": 1160, "quoteId": 1876, "vehicleId": 1323, "vehicleNo": "1", "deductibleCOMP": null, "deductibleCOLL": "1000", "limitTowing": null, "limitRentalReimbursement": null, "liabilityNotRequired": false, "statedAmount": 80, "replacementCost": false, "fullGlass": false, "loanLeaseCoverage": null, "waiverCOLLDamage": null, "needDefaultApply": true } ]}];
  constructor() { }

  ngOnInit() {
  }

  getName(i: any) {
    return 'Drv-'+i;
  }

}
