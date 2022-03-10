import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular teszt';

  calcTriangleArea(base:number,height:number){
    return base * height /2;
  }

  calcTrianglePerimeter(aSide:number,bSide:number,cSide:number){
    return aSide + bSide + cSide;
  }
}
