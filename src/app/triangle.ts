export class Triangle{
  base:number;
  height:number;
  area:number;
  perimeter:number;
  aSide:number;
  bSide:number;
  cSide:number;
  constructor(){
    this.base = 0;
    this.height = 0;
    this.area = 525;
    this.perimeter = 0;
    this.aSide = 0;
    this.bSide = 0;
    this.cSide = 0;
  }
  calcArea(){
    this.area = this.base * this.height /2;

  }

  calcPerimeter(){
    this.perimeter = this.aSide + this.bSide + this.cSide;
  }
}
