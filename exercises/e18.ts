// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be
import { Asteroid } from "../data/data";
export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const allYears = [];
  let compare = 0;
  let mostFrequent: number = 0;
  for (let index = 0; index < asteroids.length; index++) {
    const asteroid = asteroids[index];
    let year;
    if (asteroid) {
      year = asteroid.discoveryYear;
      allYears.push({ year: year, count: 0 });
    }
  }
  for (let index = 0; index < asteroids.length; index++) {
    const asteroid = asteroids[index];
    for (let j = 0; j < allYears.length; j++) {
      const currentYear = allYears[j];
      if (currentYear) {
        if (currentYear.year === asteroid?.discoveryYear) {
          currentYear.count += 1;
        }
      }
    }
  }

  for (let index = 0; index < allYears.length; index++) {
    const year = allYears[index];
    if (year) {
      if (year.count > compare) {
        compare = year.count;
        mostFrequent = year.year;
      }
    }
  }
  return mostFrequent;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
