import { Component, OnInit } from '@angular/core';
import { AgeData, GenderData } from '../models/personal.models';
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

  ngOnInit(): void {
    this.getGenderData(this.name);
    this.getAgeData(this.name);
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
}
