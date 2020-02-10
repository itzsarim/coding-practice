const numberLetterMap = {
    1: [],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
    0: []
  }
  
  const numberToConvertToLetters = '96820';
  
  const findNumberMnemonic = (num, buffer, nextIndex, bufferIndex) => {
    if(bufferIndex == num.length || nextIndex == num.length) {
      console.log(buffer);
      return;
    }
    const candidateLetters = numberLetterMap[num[nextIndex]];
    if (candidateLetters.length === 0) {
      findNumberMnemonic(num, buffer, nextIndex+1, bufferIndex);
    }
    
    candidateLetters.forEach((letter) => {
      buffer[bufferIndex] = letter;
      findNumberMnemonic(num, buffer, nextIndex+1, bufferIndex+1);
    })
  }
  
  const buffer = []
  findNumberMnemonic(numberToConvertToLetters, buffer, 0, 0);
  
  