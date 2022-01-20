const colorList = ['red', 'green', 'blue'];

/**
 * 文本行分割为云词数据
 * @param text 文本行 size word
 * @returns
 */
export const getWordsSplit = (text: string) => {
  const lines = text.split('\n');
  const result = [];
  for (let line of lines) {
    const firstSpace = line.indexOf(' ');
    const num = line.slice(0, firstSpace) || 0;
    const word = line.slice(firstSpace) || '';
    if (firstSpace > -1 && num && word) {
      result.push([word, num]);
    }
  }
  return result;
};

/**
 * 获取随机颜色
 * @returns color string
 */
export const getRandomColor: () => string = () => {
  const i = Math.round(Math.random() * colorList.length);
  return colorList[i];
};
