import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarService } from './../../services/sidebar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarObject : any;
  isCollapsed = true;
  activeMenu: string = '';

  constructor(private sidebarService: SidebarService, private router: Router){}
  
  ngOnInit(): void {
    this.sidebarObject = this.sidebarService.SidebarObject;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onWindowScroll();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('app-header, app-about, app-education, app-experience, app-contact');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let currentSectionId: string | null = null;

    sections.forEach(section => {
      const htmlElement = section as HTMLElement;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - 50;
      const sectionHeight = htmlElement.offsetHeight;
      const sectionId = section.getAttribute('id');      

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId !== null) {
        this.activeMenu = sectionId;
      }
    });

    const lastSection = sections[sections.length - 1] as HTMLElement;
    const lastSectionId = lastSection.getAttribute('id');
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight >= documentHeight - 50 && lastSectionId) {      
      currentSectionId = lastSectionId;
    }

    if (currentSectionId !== null) {
      this.activeMenu = currentSectionId;
    }   
  }
}
