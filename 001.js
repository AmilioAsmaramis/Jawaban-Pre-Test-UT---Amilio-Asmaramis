function grade(angka) {
    if (angka >= 90) {
        return "A";
    } else if (angka >= 80 && angka <=89) {
        return "B";
    } else if (angka >= 70 && angka <=79) {
        return "C";
    } else if (angka >= 60 && angka <=69) {
        return "D";
    } else {
        return "E";
    }
}
console.log(grade(59));