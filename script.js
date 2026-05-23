function firstWord(s) {

  // Remove leading/trailing spaces
  s = s.trim();

  // Find index of first space
  let index = s.indexOf(" ");

  // If no space exists
  if (index === -1) {
    return s;
  }

  // Return substring till first space
  return s.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));