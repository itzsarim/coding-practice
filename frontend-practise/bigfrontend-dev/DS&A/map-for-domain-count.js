const input = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports"
]

//expected output
// let output = 
// {
//     1320: 'com',
//     900: 'google.com',
//     410: 'yahoo.com',
//     60: 'mail.yahoo.com',
//     50: 'sports.yahoo.com',
//     10: 'mobile.sports.yahoo.com',
//     10: 'stackoverflow.com',
//     3: 'org',
//     3: 'wikipedia.org',
//     2: 'en.wikipedia.org',
//     1: 'es.wikipedia.org',
//     1: 'sports',
//     1: 'mobile.sports'
// }

function domainCounter(data) {
    const map = {};
    data.forEach((elem) => {
        let split = elem.split(',');
        makeCountMap(split[0], split[1]);
    })
    function makeCountMap(count, domain) {
        let split = domain.split('.');
        while(split.length) {
            let join = split.join('.');
            if(!map[join]) {
                map[join] = count;
            } else {
                map[join] = parseInt(map[join]) + parseInt(count);
            }
            split.shift();
        }
    }
    return map;
}

console.log(domainCounter(input));