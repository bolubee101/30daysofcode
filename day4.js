function intersect(a,b){
    let i=a.filter(value => -1 !== b.indexOf(value))
    console.log(i);
}
intersect([1,2,3,4],[3,4,5,6]);