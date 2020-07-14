<template>
  <div :class="['video-controls', started && 'show', ended && 'hide']">
    <div class="controls-inner bezier-300">
      <button
        class="btn stop-btn"
        @click="stop"
      >
        <Stop/>
      </button>
      <button
        class="btn play-btn"
        @click="playOrPause"
      >
        <Play v-if="!isPlaying"/>
        <Pause v-if="isPlaying"/>
      </button>
      <div class="time-wrap">
        <span class="time-current h6">
          {{getCurrentTime}}
        </span>
        <span class="time-all h6">
          {{getDuration}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Play from '~/components/ui/Play'
import Pause from '~/components/ui/Pause'
import Stop from '~/components/ui/Stop'

export default {
  name: 'VideoControls',
  components: {
    Play,
    Pause,
    Stop
  },
  props: [
    'getDuration',
    'getCurrentTime',
    'isPlaying',
    'playOrPause',
    'stop',
    'started',
    'ended'
  ]
}
</script>

<style>
:root {
  --controls-height: 6rem;
}
.video-controls {
  width: 100%;
  position: absolute;
  bottom: 2px;
  height: var(--controls-height);
  left: 0;
  z-index: 1000;
  opacity: 1;
  background: var(--black);
  transform: translateY(calc((var(--header-height) * .75) + 2px));
  overflow-y: visible;
  background: transparent;
  transform: translateY(0);
}
.video-controls.show .controls-inner {
  opacity: 1;
  pointer-events: auto;
}
.video-controls.show:after {
  opacity: 1;
}
.video-controls.hide .controls-inner {
  opacity: 0;
  pointer-events: none;
}
.video-controls.hide:after {
  opacity: 0;
}
.controls-inner {
  opacity: 0;
  height: var(--controls-height);
  position: absolute;
  width: 100vw;
  pointer-events: none;
  z-index: 10;
  overflow-y: visible;
  transform: translateY(calc((var(--header-height) * .75) + 2px));
}
.btn {
  height: var(--controls-height);
  width: var(--controls-height);
  padding: 1rem;
  position: absolute;
  bottom: 0;
}
.play-btn {
  left: var(--controls-height);
}
.stop-btn {
  left: 0;
  padding: 1.125rem;
}
.time-wrap {
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: var(--pad-micro);
}
.time-wrap span {
  color: var(--white);
  padding-right: var(--pad-micro);
  margin-right: var(--pad-micro);
}
.time-wrap span:first-child {
  border-right: var(--border-white); 
}
.time-wrap span:last-child {
  margin-right: 0;
}
@media (--lg) {
  .video-controls {
    transform: translateY(0);
  }
  .video-controls:hover {
    pointer-events: auto;
    transform: translateY(0);
    opacity: 1;
  }
  .video-controls:hover:after {
      opacity: 1;
    }
  .controls-inner {
    transform: translateY(0);
  }
}
</style>