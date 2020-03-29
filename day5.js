function panatin(a) {
    let x = /[\W_]/g;
    let plain = a.toLowerCase().replace(x, '');
    var reverse = plain.split('').reverse().join('');
    // console.log(plain);
    console.log(plain === reverse);
    return plain === reverse;
}
panatin("eye");