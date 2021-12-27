export const getPokeNum = (url: string) => {
  if (!url) {
    return url;
  }
  const url_arr: Array<string> = url.split('/');
  const num: string = url_arr[url_arr.length - 2];
  return parseInt(num);
};

export const titleCaseWord = (word: string) => {
  if (!word) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
};
