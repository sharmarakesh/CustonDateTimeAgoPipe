import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  files: FileList;
  isLarger = false;
  isNotImage: any;
  imageBaePath = '../../assets/images/';
  imagePath = '';
  isImageAvailable = false;
  isUploaded = false;
  onChange(evt) {
    console.log(evt);
    console.log(evt.target.files[0].type.substr(0, 5).toLowerCase() === 'image');
    console.log(evt.target.files[0].size);
    // console.log(evt.target.files[0].size > 26214400);
    this.imagePath = this.imageBaePath + evt.target.files[0].name;
    if ( evt.target.files[0].type.substr(0, 5).toLowerCase() === 'image' ) {
      this.isNotImage = false;
      this.isImageAvailable = true;
    } else {
      this.isImageAvailable = false;
      this.isNotImage = true;
    }
    if (evt.target.files[0].size > 26214400) {
     // console.log('file is larger than allowed');
      this.isLarger = !this.isLarger;
    } else {
      this.isLarger = false;
    }
  }

  uploadImage() {
    this.isUploaded = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
