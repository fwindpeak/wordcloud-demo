<template>
  <div class="word-cloud">
    <div class="row">
      <canvas id="canvas" ref="canvas" width="640" height="480"></canvas>
      <textarea type="textarea" name="text" v-model="text" />
    </div>
    <button @click="onGen">生成</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import WordCloud from 'wordcloud';
import { cut } from 'jieba-wasm';
import { getWordsSplit, getRandomColor } from '../utils/index.ts';

const canvas = ref<CanvasElement>('');
const text = ref<string>(`26 Web Technologies
20 HTML
20 <canvas>
15 CSS
15 JavaScript
12 Document Object Model
12 <audio>
12 <video>
12 Web Workers
12 XMLHttpRequest
12 SVG
9 JSON.parse()
9 Geolocation
9 data attribute
9 transform
9 transition
9 animation
7 setTimeout
7 @font-face
7 Typed Arrays
7 FileReader API
7 FormData
7 IndexedDB
7 getUserMedia()
7 postMassage()
7 CORS
6 strict mode
6 calc()
6 supports()
6 media queries
6 full screen
6 notification
6 orientation
6 requestAnimationFrame
5 border-radius
5 box-sizing
5 rgba()
5 text-shadow
5 box-shadow
5 flexbox
5 viewpoint`);

const demoWeb = `26 Web Technologies
20 HTML
20 <canvas>
15 CSS
15 JavaScript
12 Document Object Model
12 <audio>
12 <video>
12 Web Workers
12 XMLHttpRequest
12 SVG
9 JSON.parse()
9 Geolocation
9 data attribute
9 transform
9 transition
9 animation
7 setTimeout
7 @font-face
7 Typed Arrays
7 FileReader API
7 FormData
7 IndexedDB
7 getUserMedia()
7 postMassage()
7 CORS
6 strict mode
6 calc()
6 supports()
6 media queries
6 full screen
6 notification
6 orientation
6 requestAnimationFrame
5 border-radius
5 box-sizing
5 rgba()
5 text-shadow
5 box-shadow
5 flexbox
5 viewpoint`;
const listDemo = [
  ['zhong', 12],
  ['bar', 6],
  ['hello', 3],
  ['world', 33],
  ['中文', 212],
  ['按理说', 6],
  ['也是', 3],
  ['ass', 23],
  ['可以', 33],
  ['哈哈', 55]
];

onMounted(() => {
  onGen();
});

const onGen = () => {
  WordCloud('canvas', {
    list: getWordsSplit(text.value),
    // color: (word) => {
    //   return getRandomColor();
    // },
    weightFactor: 1.3
  });
};
</script>

<style>
.row {
  display: flex;
}
</style>
