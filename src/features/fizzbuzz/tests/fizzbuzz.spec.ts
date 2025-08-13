import { fizzbuzz } from "@fizzbuzz/domain/usecases/computeFizzBuzz";
import { defaultConfig } from "@fizzbuzz/domain/entities/FizzBuzzConfig";

describe("features.fizzbuzz features.fizzbuzz.domain", () => {
  it("returns number when no rule matches", () => {
    expect(fizzbuzz(1, defaultConfig)).toBe("1");
  });
  it("Fizz for multiples of 3", () => {
    expect(fizzbuzz(3, defaultConfig)).toBe("Fizz");
  });
  it("Buzz for multiples of 5", () => {
    expect(fizzbuzz(5, defaultConfig)).toBe("Buzz");
  });
  it("FizzBuzz for multiples of 15", () => {
    expect(fizzbuzz(15, defaultConfig)).toBe("FizzBuzz");
  });
  it("throws on non-positive", () => {
    expect(() => fizzbuzz(0 as any, defaultConfig)).toThrow();
  });
});
