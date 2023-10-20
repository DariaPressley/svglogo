const { Square, Triangle, Circle } = require("../shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;
    const circle = new Circle("green","white","SVG");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="bisque" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>
    </svg>`;
    const triangle = new Triangle("bisque","#3a0467","SVG");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="turquoise" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text>
    </svg>`;
    const square = new Square("turquoise","#444","SVG");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
