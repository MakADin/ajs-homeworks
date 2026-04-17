export function httpGet(url) {
  if (url) {
    return {};
  }
  throw new Error(url);
}

export function httpPost(url) {
  if (url) {
    return true;
  }
  throw new Error(url);
}
