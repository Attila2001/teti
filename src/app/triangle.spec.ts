import { Triangle } from "./Triangle";

describe('háromszöghöz tartozó metódusok',()=>{
  let triangle: Triangle;
  beforeEach(()=>{
    triangle = new Triangle();
  });

  it('Terület számítás',()=>{
    triangle.base = 30;
    triangle.height = 35;
    triangle.calcArea();
    let actual = triangle.area;
    console.log(triangle.area);
    let expected = 525;
    expect(expected).toEqual(actual);
  });
});
