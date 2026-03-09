# Tasks Complete!

## 1. Debounced Live Character Counter

Build a character counter for a `<textarea>` that updates the live character count only after the user pauses typing for 500ms.

- ✅ Use debounce
- ✅ UI should display: “Characters typed: X”
- ✅ Bonus: Warn if character count exceeds 200

[Task 1](./Task-1)

## 2. Throttled Window Resize Logger

Create a page that logs the window dimensions to the console — but only once every 250ms as the user resizes the browser.

- ✅ Use throttle
- ✅ Show current width × height on screen
- ✅ Bonus: Highlight screen size category (Mobile, Tablet, Desktop)


[Task 2](./Task-2)

## 3. Memoized Temperature Converter

Write a function to convert Celsius to Fahrenheit and vice versa.
Use memoization to cache previous conversions.

- ✅ Use memoize() wrapper
- ✅ Bonus: Add a counter to show how many times the real function runs

## Done!

[Task 3](./Task-3)

## 4. Debounced API Search Simulation

Simulate a fetch to search GitHub users using a mock API.
Fire the search only when the user pauses typing for 600ms.

- ✅ Use debounce()
- ✅ Simulate delay with setTimeout()
- ✅ Bonus: Show loading spinner during wait

## Done!
[Task 4](./Task-4)

## 5. Cleanup Forgotten Event Listeners

Create a modal popup that registers keyboard events (Esc to close)
Ensure those listeners are properly cleaned up when the modal closes.

- ✅ Prevent memory leaks
- ✅ Bonus: Log to console when cleanup happens

[Task 5](./Task-5)

## 6. Profile and Optimize List Rendering

Render a list of 1,000 items with buttons to sort, filter, and shuffle.
Measure and optimize for performance.

- ✅ Use performance.now() or console.time()
- ✅ Use batching or virtual DOM-like diffing
- ✅ Bonus: Only update DOM for changed rows


## Done!

[Task 6](./Task-6)

## 7. Performance Race: Debounce vs Throttle vs Memoization

Build a demo that lets users toggle between debounce, throttle, and memoized search strategies in a large dataset (e.g., products, cities).

✅ Compare:

- Number of function calls
- Time taken
- Smoothness of UI

✅ Display performance metrics live

## Done!

[Task 7](./Task-7)
## Comparison

| Strategy | Calls    | Taken Time (Average) | Smoothness  |
| -------- | -------- | -------------------- | ----------- |
| Debounce | very few | higher delay         | less smooth |
| Throttle | medium   | lower delay          | smooth      |
| Memoize  |  few   | very low (cached)    | smooth |
