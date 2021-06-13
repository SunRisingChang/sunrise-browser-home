export function getSuggestList(queryString: string, domain: string) {
  if (queryString) {
    if (domain == "1") return getSuggestListByBing(queryString);
    if (domain == "2") return getSuggestListByGoogle(queryString);
    if (domain == "3") return getSuggestListByBaidu(queryString);
    if (domain == "4") return getSuggestListByZhihu(queryString);
  } else {
    return Promise.resolve([]);
  }
}

async function getSuggestListByBing(queryString: string) {
  let result: any[] = [];
  return result;
}

async function getSuggestListByGoogle(queryString: string) {
  let result: any[] = [];
  return result;
}

async function getSuggestListByBaidu(queryString: string) {
  let result: any[] = [];
  return result;
}

async function getSuggestListByZhihu(queryString: string) {
  let result: any[] = [];
  return result;
}
