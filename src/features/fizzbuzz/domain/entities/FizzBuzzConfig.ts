import { FizzBuzzRule } from "./FizzBuzzRule";

export interface FizzBuzzConfig {
    rules: FizzBuzzRule[]; // ex: [{divisor:3, word:'Fizz'}, {divisor:5, word:'Buzz'}]
    fallbackToNumber?: boolean; // si aucun match: renvoyer le nombre ou chaîne vide
};

export const defaultConfig: FizzBuzzConfig = {
    rules: [
        { divisor: 3, word: "Fizz" },
        { divisor: 5, word: "Buzz" },
    ],
    fallbackToNumber: true,
};
