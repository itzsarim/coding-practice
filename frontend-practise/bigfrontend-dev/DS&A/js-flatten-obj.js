var user = {
    name: "Sarim",
    address: {
        personal: {
            area: "Goleta",
            zipcode: "93117"
        },
        office: {
            area: "Goleta",
            zipcode: "93117"
        }
    }
}
// Output should be like
// { user_name: 'Sarim',
//   user_address_personal_area: 'Goleta',
//   user_address_personal_zipcode: '93117',
//   user_address_office_area: 'Goleta',
//   user_address_office_zipcode: '93117' }

function flattenHelper(obj, prefix, result) {

    for(var key in obj) {
        if( typeof obj[key] === 'object') {
            flattenHelper(obj[key], prefix+'_'+key, result);
        } else {
            result[prefix+'_'+key] = obj[key];
        };
    }

}

function flatten(user) {
    var result = {};
    flattenHelper(user, 'user', result);
    return result;
}

console.log(flatten(user));