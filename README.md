[![npm version](https://badge.fury.io/js/@kevtucker%2Freact-audio-player-bar.svg)](https://badge.fury.io/js/@kevtucker%2Freact-audio-player-bar)
[![GitHub version](https://badge.fury.io/gh/Tucker2015%2Freact-audio-player-bar.svg)](https://badge.fury.io/gh/Tucker2015%2Freact-audio-player-bar)
![npm](https://img.shields.io/npm/dw/@kevtucker/react-audio-player-bar)

# React Audio Player

Simple React Audio Player with Artwork option. The Player bar can be positioned at the top or bottom of the screen.
Works with React 16.8.0 and above, also works with Next.js.

## Installation with NPM

```bash
npm install @kevtucker/react-audio-player-bar --save
```

## Installation with Yarn

```bash
yarn add @kevtucker/react-audio-player-bar
```

## Storybook

I have created a Storybook to show the different options available. You can view it here:

https://docs.ktinternet.net/react-audio-player-bar

## Usage

```javascript
import { Player } from "@kevtucker/react-audio-player-bar";

function App() {
  return (
    <div className="App">
      <Player
        source="https://streams.ktinternet.net:8010/d"
        title="Peoples City Radio"
        artist="Live"
        artwork="https://picsum.photos/200"
      />
    </div>
  );
}
```

## Props

| Prop     | Type   | Default  | Description                |
| -------- | ------ | -------- | -------------------------- |
| source   | string | ""       | The audio source           |
| title    | string | ""       | The title of the audio     |
| artist   | string | ""       | The artist of the audio    |
| artwork  | string | ""       | The artwork of the audio   |
| position | string | "bottom" | The position of the player |

## License

[MIT](https://choosealicense.com/licenses/mit/)
