import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutObject = {
    title: '',
    img: {url: '../../../../assets/img/about.jpg', alt: 'Image' }, 
    description: [] as string[],
    buttonHire: {
      class: 'btn',
      href: '#',
      text: 'Hire Me'
    },
    skillsLeft: [
      { skillName: 'Design', percent: 85 },
      { skillName: 'SEO', percent: 95 },  
    ],
    skillsRight: [
      { skillName: 'Development', percent: 90 },
      { skillName: 'Marketing', percent: 85 }
    ]
  };

  private stringsUrl = 'assets/about/strings.json';

  constructor(private http: HttpClient) {
    this.loadStrings();
  }

  private loadStrings(): void {
    this.http.get<any>(this.stringsUrl).subscribe(strings => {
      this.AboutObject.title = strings.title;
      this.aboutObject.description = strings.description;
    });
  }

  get AboutObject() {
    return this.aboutObject;
  }
}
