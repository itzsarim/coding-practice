var Trie = function() {
    this.children = {};
    this.words = [];
    this.isWord = false;
};

Trie.prototype.searchPrefix = function(prefix) {
    var cur = this;
    for(var i=0; i<prefix.length; i++) {
        var c = prefix[i];
        if(!cur.children[c]) {
            return false;
        }
        cur = cur.children[c];
    }
    return true;
}

/*
* @params {str} prefix string
* @returns {[words]} array of words which has the prefix
*/
Trie.prototype.allWordsWithThisPrefix = function(prefix) {
    var cur = this;
    for(var i=0; i<prefix.length; i++) {
        var c = prefix[i];
        if(!cur.children[c]) {
            return [];
        }
        cur = cur.children[c];
    }
    return cur.words;
}

Trie.prototype.insert = function(word) {
    var cur = this;
    for(var i=0; i<word.length; i++) {
        if(!cur.children[word[i]]) {
            cur.children[word[i]] = new Trie();
        }
        cur.words.push(word);
        cur = cur.children[word[i]];
    }
    cur.words.push(word);
    cur.isWord = true;
}

Trie.prototype.search = function(word) {
    var cur = this;
    for(var i=0; i< word.length; i++) {
        var c = word[i];
        if(!cur.children[c]) {
            return false;
        }
        cur = cur.children[c];
    }
    return cur.isWord === true;
 }