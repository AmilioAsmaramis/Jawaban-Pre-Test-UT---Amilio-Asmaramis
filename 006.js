function rekursifPangkat(x,y){
    if (y == 1) {
        return x;
    } else {
        return x = x * rekursifPangkat(x,y-1);
    }
}
console.log(rekursifPangkat(8,2))