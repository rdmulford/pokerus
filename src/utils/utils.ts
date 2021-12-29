// @ts-ignore
import {DEV_MODE} from 'react-native-dotenv';
import {Image} from 'react-native';

export const getPokeNum = (url: string) => {
  if (!url) {
    return url;
  }
  const url_arr: Array<string> = url.split('/');
  const num: string = url_arr[url_arr.length - 2];
  return parseInt(num, 10);
};

export const titleCaseWord = (word: string) => {
  if (!word) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
};

export const getImageBasedOnMode = (uri: string) => {
  return DEV_MODE === 'true'
    ? Image.resolveAssetSource(require('../assets/1.png')).uri
    : uri;
};
