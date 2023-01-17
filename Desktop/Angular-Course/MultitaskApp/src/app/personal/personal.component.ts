import { Component, OnInit } from '@angular/core';
import { AgeData, GenderData, ImageData } from '../models/personal.models';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  constructor(private personalService: PersonalService) {}

  name: string = 'Lucy';
  genderData?: GenderData;
  ageData?: AgeData;
  imageData?: ImageData;

  ngOnInit(): void {
    this.getGenderData(this.name);
    this.getAgeData(this.name);
    this.getImageData();
    this.name = '';
  }

  onSubmit() {
    this.getGenderData(this.name);
    this.getAgeData(this.name);
    this.getImageData();
    this.name = '';
  }

  private getGenderData(name: string) {
    this.personalService.getGenderData(name).subscribe({
      next: (response) => {
        this.genderData = response;
      },
    });
  }

  private getAgeData(name: string) {
    this.personalService.getAgeData(name).subscribe({
      next: (response) => {
        this.ageData = response;
      },
    });
  }

  private getImageData() {
    this.personalService.getImageData().subscribe({
      next: (response) => {
        this.imageData = response;
      },
    });
  }
}
