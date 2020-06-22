const names = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

console.log(removeDups(names));

