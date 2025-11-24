import { expect } from "jsr:@std/expect";
import { fibonacci } from "./fibonacci.js";

Deno.test("test first Fibonacci number", () => {
    expect(fibonacci(0)).toBe(1);
});

Deno.test("test second Fibonacci number", () => {
    expect(fibonacci(1)).toBe(1);
});

Deno.test("test third Fibonacci number", () => {
    expect(fibonacci(3)).toBe(3);
});

Deno.test("returns undefined for negative n", () => {
    expect(fibonacci(-1)).toBeUndefined();
});

Deno.test("test fifth Fibonacci number (n = 4)", () => {
    // Folge: 1, 1, 2, 3, 5 → fib(4) = 5
    expect(fibonacci(4)).toBe(5);
});
