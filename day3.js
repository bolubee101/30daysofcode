function Vcount(a) {
    let V= a.match(/[aeiou]/gi);
    if(V) {
         console.log(V.length)
        return V.length
    } else{
        return 0
    }
}

Vcount("hes got the whOle world");