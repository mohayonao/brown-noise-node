# BrownNoiseNode
[![Build Status](http://img.shields.io/travis/mohayonao/brown-noise-node.svg?style=flat-square)](https://travis-ci.org/mohayonao/brown-noise-node)
[![NPM Version](http://img.shields.io/npm/v/brown-noise-node.svg?style=flat-square)](https://www.npmjs.org/package/brown-noise-node)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> BrownNoise AudioNode for Web Audio API

## Installation

```
npm install brown-noise-node
```

downloads:

- [brown-noise-node.js](https://raw.githubusercontent.com/mohayonao/brown-noise-node/master/build/brown-noise-node.js)
- [brown-noise-node.min.js](https://raw.githubusercontent.com/mohayonao/brown-noise-node/master/build/brown-noise-node.min.js)

## API
### PluckNode
- `constructor(audioContext)`

#### Class Methods
- `install(): void`
  - install `createBrownNoise()` method to `AudioContext.prototype` force

#### Instance Methods
- `start(when: number): void`
- `stop(when: number): void`

## Usage

```js
var noise = new BrownNoiseNode(audioContext);

noise.start(audioContext.currentTime);
noise.stop(audioContext.currentTime + 4);
```

### Install to AudioContext

At first, call `install()` method.

```js
require("brown-noise-node").install();
```

```html
<script src="/path/to/brown-noise-node.js"></script>
<script>BrownNoiseNode.install();</script>
```

Then, you can use `createBrownNoise()` method at AudioContext.

## Demo

http://mohayonao.github.io/brown-noise-node/

## License

MIT
