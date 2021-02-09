function subCypher (val, diff){
    return val.split('').map((char,index) => String.fromCharCode(val.charCodeAt(index) + diff)).join('');
}

const encrypt = {
    encryptURL: function (url) {
        return subCypher(url,4);
    },
}

module.exports = encrypt;