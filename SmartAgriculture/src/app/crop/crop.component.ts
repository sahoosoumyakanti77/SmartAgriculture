import { Component, OnInit } from '@angular/core';
import { CropService } from '../crop.service';
import { Crop } from '../crop';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  cropData: Crop;
  Crop: Crop[] = [];

  constructor(private cropService: CropService) {
    this.cropData = {
    crop_type: ' ',
    harvest_date: 0,
    name: ' ',
    planting_date: 0,
    id: 0
  };
    this.getCrop();
  }
  private getCrop() {
    this.cropService.getCropList().subscribe(data => {
      this.Crop = data;
    });
  }

  signUp(data: object): void {
    console.log('Crop Data:', this.cropData);
    this.cropService.createCrop(this.cropData)
      .subscribe(response => {
        console.log('Data sent successfully', response);
       
       
      });
    }
    

    };


  


