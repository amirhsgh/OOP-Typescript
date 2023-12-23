import Circle from "..";

let myCircle: Circle;

beforeEach(() => {
  myCircle = new Circle("red", 5);
});

test("Circle should have a color and a radius", () => {
  expect(myCircle.color).toBe("red");
  expect(myCircle.radius).toBe(5);
});

test("Circle should calculate its area correctly", () => {
  expect(myCircle.getArea()).toBeCloseTo(78.54, 2);
});

test("Circle should override the draw method", () => {
  const consoleSpy = jest.spyOn(console, "log");
  myCircle.draw();
  expect(consoleSpy).toHaveBeenCalledWith("Drawing a red shape.");
  consoleSpy.mockRestore();
});
