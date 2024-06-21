import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationObject = {
    title: '',
    timeline: [] as { 
      degree?: string, 
      name: string,
      year?: string
    } []
  };

  private stringsUrl = 'assets/education/strings.json';

  constructor(private http: HttpClient) {
    this.loadStrings();
  }

  private loadStrings(): void {
    this.http.get<any>(this.stringsUrl).subscribe(strings => {
      this.EducationObject.title = strings.title;
      this.educationObject.timeline = Object.keys(strings)
      .filter(key => key !== 'title')
      .map(key => strings[key]);      
    });
  }

  get EducationObject() {
    return this.educationObject;
  }
}
