import { expect } from "jsr:@std/expect";
import { solve } from "./quadratic_equation.ts";

// Fall 1: d > 0 → zwei Lösungen
Deno.test("solve returns two real roots when discriminant is positive", () => {
    const roots = solve(1, 0, -1);
    expect(roots).toEqual([1, -1]);
});

// Fall 2: d == 0 → eine Lösung
Deno.test("solve returns one real root when discriminant is zero", () => {
    const roots = solve(1, -2, 1);
    expect(roots).toEqual([1]);
});

// Fall 3: d < 0 → keine reelle Lösung
Deno.test("solve returns empty array when discriminant is negative", () => {
    const roots = solve(1, 0, 1);
    expect(roots).toEqual([]);
});
