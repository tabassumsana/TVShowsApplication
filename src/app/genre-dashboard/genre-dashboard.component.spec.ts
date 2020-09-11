import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { GenreDashboardComponent } from './genre-dashboard.component';
import { ShowsService} from '../service/shows.service';

describe('GenreDashboardComponent:', () => {
  describe('checks drama param type:', () => {
    let component: GenreDashboardComponent;
    let fixture: ComponentFixture<GenreDashboardComponent>;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GenreDashboardComponent ],
        imports: [RouterTestingModule],
        providers: [
          {provide: ActivatedRoute, useValue: {
              snapshot: {
                  params: {
                    type: 'drama'
                  }
            } }
          },
          {provide: ShowsService, useValue: {
              dramaShows: {type: 'Popular In Drama', list: []}
            }
          },
          { provide: Location, useClass: SpyLocation }]
      })
      .compileComponents();
      fixture = TestBed.createComponent(GenreDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should verify the headline of the page correctly', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.container .genre-name').textContent).toContain('Popular In Drama');
    });
    it('should verify component data correctly', () => {
      const data = {
        type: 'Popular In Drama',
        list: []
      };
      expect(component.genreType).toBe('drama');
      expect(component.genreData).toEqual(data);
    });
    it('should have goBack method and should call location.back', () => {
      spyOn(component.location, 'back');
      const ele = fixture.debugElement.queryAll(By.css('.back-icon'));
      expect(ele.length).toBe(1);
      const backBtn: HTMLElement = ele[0].nativeElement;
      expect(backBtn).toHaveClass('back-icon');
      backBtn.click();
      expect(component.goBack).toBeDefined();
      expect(component.location.back).toHaveBeenCalled();
    });
  });
  describe('checks romance param type:', () => {
    let component: GenreDashboardComponent;
    let fixture: ComponentFixture<GenreDashboardComponent>;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GenreDashboardComponent ],
        imports: [RouterTestingModule],
        providers: [
          {provide: ActivatedRoute, useValue: {
              params: {type: 'romance'},
              snapshot: {
                  params: {
                    type: 'romance'
                  }
            } }
          },
          {provide: ShowsService, useValue: {
              romanceShows: {type: 'Popular In Romance', list: []}
            }
          }]
      })
      .compileComponents();
      fixture = TestBed.createComponent(GenreDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should verify the headline of the page correctly', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.container .genre-name').textContent).toContain('Popular In Romance');
    });
    it('should verify component data correctly', () => {
      const data = {
        type: 'Popular In Romance',
        list: []
      };
      expect(component.genreType).toBe('romance');
      expect(component.genreData).toEqual(data);
      // expect(component.genreData['type']).toBe('Popular In Romance');
      // expect(component.genreData['list'].length).toBe(0);
    });
  });
  describe('checks action param type:', () => {
    let component: GenreDashboardComponent;
    let fixture: ComponentFixture<GenreDashboardComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ GenreDashboardComponent ],
          imports: [RouterTestingModule],
          providers: [
            {provide: ActivatedRoute, useValue: {
                snapshot: {
                    params: {
                      type: 'action'
                    }
              } }
            },
            {provide: ShowsService, useValue: {
                actionShows: {type: 'Popular In Action', list: []}
              }
            }]
        })
        .compileComponents();
        fixture = TestBed.createComponent(GenreDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should verify the headline of the page correctly', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.container .genre-name').textContent).toContain('Popular In Action');
    });
    it('should verify component data correctly', () => {
      const data = {
        type: 'Popular In Action',
        list: []
      };
      expect(component.genreType).toBe('action');
      expect(component.genreData).toEqual(data);
    });
  });
  describe('checks sciFi param type:', () => {
    let component: GenreDashboardComponent;
    let fixture: ComponentFixture<GenreDashboardComponent>;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GenreDashboardComponent ],
        imports: [RouterTestingModule],
        providers: [
          {provide: ActivatedRoute, useValue: {
              snapshot: {
                  params: {
                    type: 'sciFi'
                  }
            } }
          },
          {provide: ShowsService, useValue: {
              sciFiShows: {type: 'Popular In Science-Fiction', list: []}
            }
          }]
      })
      .compileComponents();
      fixture = TestBed.createComponent(GenreDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should verify the headline of the page correctly', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.container .genre-name').textContent).toContain('Popular In Science-Fiction');
    });
    it('should verify component data correctly', () => {
      const data = {
        type: 'Popular In Science-Fiction',
        list: []
      };
      expect(component.genreType).toBe('sciFi');
      expect(component.genreData).toEqual(data);
    });
  });
  describe('checks horror param type:', () => {
    let component: GenreDashboardComponent;
    let fixture: ComponentFixture<GenreDashboardComponent>;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GenreDashboardComponent ],
        imports: [RouterTestingModule],
        providers: [
          {provide: ActivatedRoute, useValue: {
              snapshot: {
                  params: {
                    type: 'horror'
                  }
            } }
          },
          {provide: ShowsService, useValue: {
              horrorShows: {type: 'Popular In Horror', list: []}
            }
          }]
      })
      .compileComponents();
      fixture = TestBed.createComponent(GenreDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should verify the headline of the page correctly', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.container .genre-name').textContent).toContain('Popular In Horror');
    });
    it('should verify component data correctly', () => {
      const data = {
        type: 'Popular In Horror',
        list: []
      };
      expect(component.genreType).toBe('horror');
      expect(component.genreData).toEqual(data);
    });
  });
});

class SpyLocation{}
