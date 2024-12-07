# Loopy Seven Wonders Activity

An activity to practice building looping promise chains in Javascript.

## One-Time Setup

1. Fork and clone this repository.

2. In your terminal, navigate to the project directory.

3. Install the project dependencies.

   ```bash
   $ npm install
   ```

## Running the Activity

1. In your terminal, navigate to the project directory.

2. Run the activity.

  - In the terminal from the project directory, run the following command:

    ```bash
    $ node src/index.js
    ```

    Or

    ```bash
    $ npm start
    ```

  - Or from VS Code, install the **Code Runner** extension and run the file by clicking the play button in the top right corner of the editor.

## Syntax Warnings

The project is configured to use ESLint to provide syntax warnings. ESLint can be run from the project directory using the following command:

```bash
$ npm run lint
```

ESLint warnings can be shown in VS Code by installing the **ESLint** extension.

## Activity Directions

Use the [LocationIQ's Forward Geocoding API](https://locationiq.com/geocoding). To write code to retrieve the latitude and longitude of the [seven wonders of the New7Wonders of the World](https://en.wikipedia.org/wiki/New7Wonders_of_the_World), which are the following:

| Wonder              |
| ------------------- |
| Great Wall of China |
| Petra               |
| Colosseum           |
| Chichen Itza        |
| Machu Picchu        |
| Taj Mahal           |
| Christ the Redeemer |

In Learn, it was sufficient to write a single promise chain to retrieve the latitude and longitude of each wonder, running the code for each wonder one by one. This activity focuses on the extra challenges section of the Learn lesson, which involves writing a single promise chain that retrieves the latitude and longitude of each wonder in a loop., and places the results in a data structure with the following shape:

```js
{
    "Great Wall of China": {
        latitude: "...",
        longitude: "..."
    },
    "Petra": {
        latitude: "...",
        longitude: "..."
    },
    "Colosseum": {
        latitude: "...",
        longitude: "..."
    },
    "Chichen Itza": {
        latitude: "...",
        longitude: "..."
    },
    "Machu Picchu": {
        latitude: "...",
        longitude: "..."
    },
    "Taj Mahal": {
        latitude: "...",
        longitude: "..."
    },
    "Christ the Redeemer": {
        latitude: "...",
        longitude: "..."
    }
}
```

Because the API has a rate limit, we need to introduce a pause between each request. This was readily accomplished in Python using the `time.sleep` function, which pauses the code execution for a specified number of seconds. Our Python code was synchronous, so the `time.sleep` function was sufficient. In Javascript, making network calls is done asynchronously, so we need to use a different approach to introduce a pause between requests, which will be queued up in promises rather than executed synchronously.

Working in the `src/index.js`, we will start from a single promise chain that retrieves the latitude and longitude of the Great Wall of China, then gradually refactor the code to loop through the wonders and retrieve the latitude and longitude of each wonder in turn, using both raw promises and async/await syntax.

## Solution Notes

Three solutions are provided in the `solutions` directory:

1. `functionalSingleRequest.js`: Not a full solution to the activity, but a starting point that wraps the LocationIQ API call in a function that returns a promise.
2. `loopyPromise.js`: Uses raw promises and a `wait` helper based on the `setTimeout` function to introduce a pause between requests.
3. `loopyAsyncAwait.js`: The same solution as `loopyPromise.js`, but using async/await syntax instead of raw promises.

From the project root directory, you can run the solutions using the following commands:

```bash
$ node --env-file=.env solutions/functionalSingleRequest.js
$ node --env-file=.env solutions/loopyPromise.js
$ node --env-file=.env solutions/loopyAsyncAwait.js
```

The first example will return quickly, but the looping solutions will each take approximately 7 seconds to complete, since we added a 1 second pause between each request to avoid hitting the API rate limit.