// const jieba = require('@node-rs/jieba');
const jieba = require('jieba-wasm');

const a = jieba.cut('我们中出了一个英雄,这让我们很自豪', false);

console.log(a);
