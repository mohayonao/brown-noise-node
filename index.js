var noiseData = new Float32Array(44100 * 5);
var noiseBuffer = null;

// http://noisehack.com/generate-noise-web-audio-api/
var lastOut = 0;

for (var i = 0, imax = noiseData.length; i < imax; i++) {
  var white = Math.random() * 2 - 1;

  noiseData[i] = (lastOut + (0.02 * white)) / 1.02;
  lastOut = noiseData[i];
  noiseData[i] *= 3.5; // (roughly) compensate for gain
}

function BrownNoiseNode(audioContext) {
  if (noiseBuffer === null) {
    noiseBuffer = audioContext.createBuffer(1, noiseData.length, audioContext.sampleRate);
    noiseBuffer.getChannelData(0).set(noiseData);
  }
  var bufferSource = audioContext.createBufferSource();

  bufferSource.buffer = noiseBuffer;
  bufferSource.loop = true;

  return bufferSource;
}

BrownNoiseNode.install = function() {
  Object.defineProperty(AudioContext.prototype, "createBrownNoise", {
    value: function() {
      return new BrownNoiseNode(this);
    },
    enumerable: false, writable: false, configurable: true
  });
};

module.exports = BrownNoiseNode;
