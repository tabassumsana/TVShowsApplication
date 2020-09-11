import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs/';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { ShowsService} from '../service/shows.service';

describe('DashboardComponent', () => {
  describe('checks for more than one record', () => {
      let component: DashboardComponent;
      let fixture: ComponentFixture<DashboardComponent>;
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [ DashboardComponent ],
            imports: [BrowserAnimationsModule],
            providers: [
               {provide: ShowsService, useValue: {
                  getAllShows: () => of(showList)
               }},
            ],
            })
         .compileComponents();
         fixture = TestBed.createComponent(DashboardComponent);
         component = fixture.componentInstance;
         fixture.detectChanges();
      }));

      it('should create', () => {
         expect(component).toBeTruthy();
       });
      it('should verify show list', () => {
         expect(component.showList.length).toBe(2);
       });
      it('should verify top show list', () => {
         expect(component.topShows.length).toBe(2);
       });
      it('should verify others show list', () => {
         const key = 'list';
         expect(component.dramaShows[key].length).toBe(1);
         expect(component.romanceShows[key].length).toBe(0);
         expect(component.actionShows[key].length).toBe(1);
         expect(component.sciFiShows[key].length).toBe(0);
         expect(component.horrorShows[key].length).toBe(1);
       });
      it('should verify the carousal next and prev button functionality', () => {
         const ele = fixture.debugElement.queryAll(By.css('button'));
         expect(ele.length).toBe(2);
         expect(component.topShows.length).toBe(2);
         expect(component.currentSlide).toBe(0);
         const nextEle: HTMLElement = ele[1].nativeElement;
         expect(nextEle).toHaveClass('next');
         nextEle.click();
         expect(component.currentSlide).toBe(1);
         const prevEle: HTMLElement = ele[0].nativeElement;
         expect(prevEle).toHaveClass('prev');
         prevEle.click();
         expect(component.currentSlide).toBe(0);
      });
   });

  describe('checks for single record:', () => {
      let component: DashboardComponent;
      let fixture: ComponentFixture<DashboardComponent>;
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [ DashboardComponent ],
            imports: [BrowserAnimationsModule],
            providers: [
               {provide: ShowsService, useValue: {
                  getAllShows: () => of([showList[0]])
               }},
            ],
            })
         .compileComponents();
         fixture = TestBed.createComponent(DashboardComponent);
         component = fixture.componentInstance;
         fixture.detectChanges();
      }));

      it('should verify the carousal button functionality with single record', () => {
         const ele = fixture.debugElement.queryAll(By.css('button'));
         expect(ele.length).toBe(2);
         expect(component.topShows.length).toBe(1);
         expect(component.currentSlide).toBe(0);
         const nextEle: HTMLElement = ele[1].nativeElement;
         expect(nextEle).toHaveClass('next');
         nextEle.click();
         expect(component.currentSlide).toBe(0);
         const prevEle: HTMLElement = ele[0].nativeElement;
         expect(prevEle).toHaveClass('prev');
         prevEle.click();
         expect(component.currentSlide).toBe(0);
       });
   });
});

const showList = [{
  id: 1,
  url: 'http://www.tvmaze.com/shows/4/arrow',
  name: 'Arrow',
  type: 'Scripted',
  language: 'English',
  genres: [
     'Drama',
     'Action',
  ],
  status: 'Ended',
  runtime: 60,
  premiered: '2012-10-10',
  officialSite: 'http://www.cwtv.com/shows/arrow',
  schedule: {
     time: '21:00',
     days: [
        'Tuesday'
     ]
  },
  rating: {
     average: 9
  },
  weight: 98,
  network: {
     id: 5,
     name: 'The CW',
     country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
     }
  },
  webChannel: null,
  externals: {
     tvrage: 30715,
     thetvdb: 257655,
     imdb: 'tt2193021'
  },
  image: {
     medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
     original: 'http://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg'
  },
  summary: '<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>',
  updated: 1594121583,
  _links: {
     self: {
        href: 'http://api.tvmaze.com/shows/4'
     },
     previousepisode: {
        href: 'http://api.tvmaze.com/episodes/1744752'
     }
  }
},
{
  id: 1,
  url: 'http://www.tvmaze.com/shows/4/arrow',
  name: 'Arrow',
  type: 'Scripted',
  language: 'English',
  genres: [
     'Horror',
  ],
  status: 'Ended',
  runtime: 60,
  premiered: '2012-10-10',
  officialSite: 'http://www.cwtv.com/shows/arrow',
  schedule: {
     time: '21:00',
     days: [
        'Tuesday'
     ]
  },
  rating: {
     average: 8.5
  },
  weight: 98,
  network: {
     id: 5,
     name: 'The CW',
     country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
     }
  },
  webChannel: null,
  externals: {
     tvrage: 30715,
     thetvdb: 257655,
     imdb: 'tt2193021'
  },
  image: {
     medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
     original: 'http://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg'
  },
  summary: '<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>',
  updated: 1594121583,
  _links: {
     self: {
        href: 'http://api.tvmaze.com/shows/4'
     },
     previousepisode: {
        href: 'http://api.tvmaze.com/episodes/1744752'
     }
  }
}];
