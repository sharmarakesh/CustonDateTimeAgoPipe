import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  files: FileList;

  // onChange(files: FileList) {
  //   this.files = files;
  //   files.
  // }

  onChange(evt) {
    console.log(evt.target.files[0].size);
  }
  constructor() { }

  ngOnInit() {
  }

}
