const colorList = ['red', 'green', 'blue'];

type NumWord = [string, number];

export const arrayCount: (array: string[]) => NumWord[] = (array) => {
  const dict = new Map<string, number>();

  for (const item of array) {
    if (dict.has(item)) {
      const num = dict.get(item) + 1;
      dict.set(item, num);
    } else {
      dict.set(item, 1);
    }
  }

  const result = Array.from(dict).sort((a, b) => b[1] - a[1]);

  return result;
};

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
