import { FizzBuzzConfig } from "@fizzbuzz/domain/entities/FizzBuzzConfig";

export type ComputeFizzBuzzInput = { value: number; config: FizzBuzzConfig };
export type ComputeFizzBuzzOutput = { value: number; label: string };

export function computeFizzBuzz(input: ComputeFizzBuzzInput): ComputeFizzBuzzOutput {
    const label = fizzbuzz(input.value, input.config);
    return { value: input.value, label };
}

export function fizzbuzz(n: number, config: FizzBuzzConfig): string {
    if (!Number.isInteger(n)) throw new Error("n must be an integer");
    if (n <= 0) throw new Error("n must be > 0");
    const out = config.rules
      .filter(r => n % r.divisor === 0)
      .map(r => r.word)
      .join("");

    if (out.length > 0) return out;
    return config.fallbackToNumber ? String(n) : "";
}
