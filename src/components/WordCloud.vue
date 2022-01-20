<template>
  <div class="word-cloud">
    <article class="row" style="min-height: 480px">
      <textarea
        type="textarea"
        name="text"
        placeholder="输入文章"
        v-model="textRaw"
      />
      <div class="btn btn-split">
        <button @click="onWordCut" :disabled="!textRaw">分词</button>
      </div>
      <textarea
        type="textarea"
        name="text"
        placeholder="数量 词语"
        v-model="text"
      />
    </article>

    <div class="center">
      <div style="width: 320px">
        <span>调节字体大小</span>
        <input type="number" v-model="weightFactor" @change="onGen" />
      </div>
    </div>

    <div class="center">
      <div style="width: 320px">
        <button @click="onGen" :disabled="!text">生成</button>
      </div>
    </div>

    <div class="row center">
      <article>
        <canvas id="canvas" ref="canvas" width="640" height="480"></canvas>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import WordCloud from 'wordcloud';
import { getWordsSplit, arrayCount } from '../utils/index';
import { Segment, useDefault } from 'segmentit';

const canvas = ref<HTMLElement>();
const textRaw =
  ref<string>(`中文分词指的是中文在基本文法上有其特殊性而存在的分词。
分词就是将连续的字序列按照一定的规范重新组合成词序列的过程。我们知道，在英文的行文中，单词之间是以空格作为自然分界符的，而中文只是字、句和段能通过明显的分界符来简单划界，唯独词没有一个形式上的分界符，虽然英文也同样存在短语的划分问题，不过在词这一层上，中文比之英文要复杂得多、困难得多。`);
const text = ref<string>(``);

onMounted(() => {
  onGen();
});

const weightFactor = ref(1.0);

const onWordCut = () => {
  const segmentit = useDefault(new Segment());
  const result = segmentit.doSegment(textRaw.value, {
    simple: true,
    stripPunctuation: true
  });
  console.log(result);
  const r = arrayCount(result).map((v) => `${v[1]} ${v[0]}`);
  console.log(r);
  text.value = r.join('\n');
};

const onGen = () => {
  if (canvas.value && text.value) {
    WordCloud(canvas.value, {
      list: getWordsSplit(text.value),
      weightFactor: weightFactor.value
    });
  }
};
</script>

<style>
.word-cloud {
  padding: 1rem;
}
.row {
  display: flex;
  flex-direction: row;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-split {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 220px;
}

.btn button {
  width: 120px;
}
</style>
