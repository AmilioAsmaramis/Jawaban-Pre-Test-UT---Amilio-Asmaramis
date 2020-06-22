function palindrome (kata) {
    const karakter = kata.toLowerCase().replace(/[^a-z]/g, '').split('');
    if (karakter.join('') === karakter.reverse().join('')){
      return "true";
    } else {
      return "false";
    }
  }
console.log(palindrome("malam"));