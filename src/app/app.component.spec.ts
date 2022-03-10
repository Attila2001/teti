import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('elso angular teszt', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('az alkamazás létrehozható', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`A cím (title) 'teti'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular teszt');
  });

  it('A title generálható', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.cím')?.textContent).toContain('Angular teszt');
  });

  it('háromszög területszámytó metódus teszje',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calcTriangleArea(30,35)).toEqual(525);
  });
});
