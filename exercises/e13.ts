// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53
import { sumArray } from "./functions";
import { AllData } from "../data/data";
export function getAveragePlanetsTemperature(data: AllData) {
  return (
    sumArray(data.planets.map((planet) => planet.avgTemp)) / data.planets.length
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
