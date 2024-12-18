// Generate prefix
function genPrefix(firstName) {
  if (firstName.length > 5 && firstName.charAt(0).toLowerCase() === 'k') {
    return "King Minion";
  } else if (firstName.length > 5 || firstName.charAt(0).toLowerCase() === 's') {
    return "Boss Minion";
  } else {
    return "Minion";
  }
}

// Generate first name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === 'a' || firstLetter === 'e') {
    return 'Kevin';
  } else if (firstLetter === 'b' && firstName.length < 5) {
    return 'Bob';
  } else if (firstLetter === 's' && firstName.includes('u')) {
    return 'Stuart';
  } else {
    return 'Dave';
  }
}

// Generate middle name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === 'road' && favoriteColor.toLowerCase() === 'yellow') {
    return 'BananaKing';
  } else if (roadType === 'street' || roadType === 'lane') {
    return `${favoriteColor}bloop`;
  } else if (roadType === 'avenue' && favoriteColor.length > 3) {
    return `${favoriteColor}boing`;
  } else {
    return `Beedo`;
  }
}

// Generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  const firstLetter = lastName.charAt(0).toLowerCase();

  if ((lastLetter === 'a' || lastLetter === 'e') && firstLetter === 'b') {
    return 'Doo';
  } else if ((lastLetter === 'i' || lastLetter === 'o') && firstLetter !== 'z') {
    return 'Baba';
  } else if (lastLetter === 'u' || lastLetter === 'n') {
    return 'Fluffy';
  } else {
    return 'Banana';
  }
}

// Generate suffix
function genSuffix(favoriteAnimal) {
  if (favoriteAnimal.toLowerCase() === 'dog' || favoriteAnimal.toLowerCase() === 'cat') {
    return `of the Loyal ${favoriteAnimal} Clan.`;
  } else if (favoriteAnimal.length > 3 && favoriteAnimal.toLowerCase() !== 'snake') {
    return `of the Mighty ${favoriteAnimal} Tribe.`;
  } else {
    return `of the Banana Gang.`;
  }
}

// Master Name Building Function
function genFullName() {
  // Get the User's Inputs from HTML Elements
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const roadType = document.getElementById('roadType').value;
  const favoriteColor = document.getElementById('favoriteColor').value.trim();
  const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

  // Run Name Generating Functions & store them in new variables
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  // Capitalize Name Variables when needed
  const capitalizedPrefix = capitalize(prefix);
  const capitalizedFirstName = capitalize(newFirstName);
  const capitalizedMiddleName = capitalize(middleName);

  // Combine all of the name variables into a full new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${newLastName} ${suffix}`;
  
  // Display the new name
  document.getElementById('result').textContent = fullName;
}

// Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
