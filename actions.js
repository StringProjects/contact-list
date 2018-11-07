import {
  SHOW_DETAIL,
} from './constants';

export function showDetail(item) {
  return {
    type: SHOW_DETAIL,
    item
  };
}