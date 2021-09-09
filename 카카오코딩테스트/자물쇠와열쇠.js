function solution(key, lock) {
  const keyLen = key.length;
  const lockLen = lock.length;

  const exArr = [];
  for (let i = 0; i < lockLen * 3; i++) {
    exArr.push([]);
    for (let j = 0; j < lockLen * 3; j++) {
      exArr[i].push(2);
    }
  }

  for (let i = lockLen; i < lockLen * 2; i++) {
    for (let j = lockLen; j < lockLen * 2; j++) {
      exArr[i][j] = lock[i - lockLen][j - lockLen];
    }
  }

  const exLen = exArr.length;

  let homCount = 0;
  for (let i = 0; i < lockLen; i++) {
    for (let j = 0; j < lockLen; j++) {
      if (lock[i][j] === 0) homCount++;
    }
  }

  let c = 0;
  while (c <= 3) {
    for (let i = 0; i <= exLen - keyLen; i++) {
      for (let j = 0; j <= exLen - keyLen; j++) {
        let count = 0;
        let d = true;
        for (let k = 0; k < keyLen; k++) {
          for (let n = 0; n < keyLen; n++) {
            if (key[k][n] === 1 && exArr[k + i][n + j] == 0) count++;
            if (key[k][n] === 1 && exArr[k + i][n + j] == 1) d = false;
          }
        }

        if (count === homCount && d) return true;
      }
    }
    c++;
    //키를 회전
    const keyTemp = [];
    for (let i = 0; i < key.length; i++) {
      keyTemp.push([...key[i]]);
    }
    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < key.length; j++) {
        key[i][j] = keyTemp[key.length - 1 - j][i];
      }
    }
  }

  return false;
}
