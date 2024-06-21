import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarObject = {
    img: { url: '../../../assets/img/profile.jpg', alt: 'Image' },
    menu: [],
    socials: [],
  };

  private stringsUrl = 'assets/sidebar/strings.json';
  private linksUrl = 'assets/sidebar/links.json';  
  private iconsUrl = 'assets/sidebar/icons.json';

  constructor(private http: HttpClient) {
    this.loadSidebarData();
  }

  private loadSidebarData(): void {
    const strings$: Observable<any> = this.http.get<any>(this.stringsUrl);
    const links$: Observable<any> = this.http.get<any>(this.linksUrl);
    const icons$: Observable<any> = this.http.get<any>(this.iconsUrl);
    
    forkJoin([strings$, links$, icons$]).subscribe(
      ([strings, links, icons]: [any, any, any]) => {
        if (strings.menu && links.menu && icons.menu) {
          this.sidebarObject.menu = strings.menu.map((item: any, index: number) => ({
            name: item.name,
            href: links.menu[index].href,
            fragment: links.menu[index].fragment,
            icon: icons.menu[index].icon,
          }));
        }

        if (links.socials && icons.socials) {
          this.sidebarObject.socials = links.socials.map((item: any, index: number) => ({
            href: links.socials[index].href,
            icon: icons.socials[index].icon,
          }));
        }
      },      
    );
  }

  get SidebarObject() {
    return this.sidebarObject;
  }
}
