var input = 'address.office.zipcode.1';
var user = {
    name: "Sarim",
    address: {
        personal: {
            area: "Goleta",
            zipcode: "93117"
        },
        office: {
            area: "Goleta",
            zipcode: ["93117", "352345","234334"]
        }
    }
}

function dotDelimiterHelper(obj, splitDotString) {

    if(splitDotString.length === 0) {
        return obj;
    }

    var result = dotDelimiterHelper(obj[splitDotString[0]], splitDotString.slice(1));
    return result;
}

function dotDelimiterHelperIterative(obj, splitDotString) {
    if(obj===null || splitDotString.length === 0) {
        return '';
    }
    let ans = obj;
    splitDotString.forEach((elem) => {
        ans = ans[elem];
    })
    return ans;
}

function dotDelimiter(obj, dotstring) {
    var splitDotString = dotstring.split('.');
    var result = dotDelimiterHelperIterative(obj, splitDotString);
    return result;
}

console.log(dotDelimiter(user, input));