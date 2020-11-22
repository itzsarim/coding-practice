// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

function wordLadder(start, end, dict) {
    // queue to add possible words after changing 1 letter at a time
    let q = [];
    q.nq = q.push;
    q.dq = q.shift;
    q.nq(start);
    let dictSet = new Set(dict);

    // a map to keep track of all words already processd and its level
    let map = new Map();
    map.set(start, 0);
    let path = 0;
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newword = '';
    while(q.length != 0) {
        let word = q.dq();
        if(word == end) {
            return map.get(word) + 1;
        }
        for(let i=0; i<word.length; i++) {
            for (let j=0; j<alphabets.length;j++) {
                newword = word.slice(0,i) + alphabets[j] + word.slice(i+1, word.length);
                if(!map.has(newword) && dictSet.has(newword)) {
                    q.nq(newword);
                    map.set(newword, map.get(word) + 1);
                }
            }
        }
        path++;
    }
    return 0;
}
let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];
console.log(wordLadder(beginWord, endWord, wordList));
