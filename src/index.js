module.exports = function check(str, bracketsConfig) {


let arr = str.split('');
if (arr.length % 2 !== 0) {
    return false;
}
else {
    for (let i = 0; i <= arr.length - 1; i++) {
        bracketsConfig.forEach( item => {
          if (arr[i] === item[0] && arr[i+1] === item[1]) {
            arr.splice(i, 2);
            i = -1;
          }
        })
    }



}

return arr.length === 0;
}




