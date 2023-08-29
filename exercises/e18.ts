// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be
import { Asteroid } from "../data/data";
import { maxBy } from "./e17";
export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const countObj: { [key: string]: number } = {};
  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear.toString();
    if (countObj[year] === undefined) {
      countObj[year] = 1;
    } else {
      countObj[year]++;
    }
  }
  const countPairs = Object.entries(countObj);
  const max = maxBy(countPairs, (item) => {
    return item[1];
  });
  if (max) {
    return +max[0];
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
