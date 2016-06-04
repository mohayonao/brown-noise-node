"use strict";

const assert = require("assert");
const PinkNoiseNode = require("..");

const audioContext = new global.AudioContext();
const node = new PinkNoiseNode(audioContext);

assert(node instanceof global.AudioNode);
assert(typeof node.start === "function");
assert(typeof node.stop === "function");
