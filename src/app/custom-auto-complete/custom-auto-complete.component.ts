import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-auto-complete',
  templateUrl: './custom-auto-complete.component.html',
  styleUrls: ['./custom-auto-complete.component.css']
})
export class CustomAutoCompleteComponent implements OnInit {
  cous = [{'priority': 1, 'displayName': 'Alaska', 'code': 'AK'}, {'priority': 2, 'displayName': 'BB-bBBB', 'code': 'BK'}];
  stateCode: any = ['AL-Alabama', 'AK-Alaska', 'AZ-Arizona',
   'AR-Arkansas', 'CA-California', 'CO-Colorado', 'CT-Connecticut',
    'DE-Delaware', 'FL-Florida', 'GA-Georgia', 'HI-Hawaii', 'ID-Idaho',
     'IL-Illinois', 'IN-Indiana', 'IA-Iowa', 'KS-Kansas', 'KY-Kentucky',
      'LA-Louisiana', 'ME-Maine', 'MD-Maryland', 'MA-Massachusetts',
       'MI-Michigan', 'MN-Minnesota', 'MS-Mississippi', 'MO-Missouri',
        'MT-Montana', 'NE-Nebraska', 'NV-Nevada', 'NH-New Hampshire',
         'NJ-New Jersey', 'NM-New Mexico', 'NY-New York', 'NC-North Carolina',
          'ND-North Dakota', 'OH-Ohio', 'OK-Oklahoma', 'OR-Oregon', 'PA-Pennsylvania',
           'RI-Rhode Island', 'SC-South Carolina', 'SD-South Dakota', 'TN-Tennessee',
            'TX-Texas', 'UT-Utah', 'VT-Vermont', 'VA-Virginia', 'WA-Washington',
             'WV-West Virginia', 'WI-Wisconsin', 'WY-Wyoming'];

             selectedState: any;
  constructor() { }

  ngOnInit() {
  }

}
