// Generate prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return "The Great";
  } else {
    return "Master";
  }
}

//Generate first name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Jeff";
  } else if (firstLetter === "b") {
    return "Pablo";
  } else {
    return "Taquavion";
  }
}

//Generate middle name
function genMiddleName(roadType, favoriteColor) {
  if(roadType === 'road') {
    return `${favoriteColor}ridge`
  } else if(roadType === 'street') {
    return `${favoriteColor}stone`
  } else if(roadType === 'avenue') {
    return `${favoriteColor}son`
  } else {
    return `${favoriteColor}moon`
  }
}

//Generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length-1)
  if (lastLetter === 'a') {
    return 'Shadow'
  } else if(lastLetter === 'e') {
    return 'Storm'
  } else if(lastLetter === 'i') {
    return 'Blaze'
  } else if(lastLetter === 'o') {
    return 'Thorn'
  } else if(lastLetter === 'u') {
    return 'Frost'
  } else {
    return 'Moon'
  }
}

//Generate suffix
function genSuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal} clan.`
}

//Master Name Building Function
function genFullName() {
  //Get the Users Inputs from HTML Elements
  const firstName = document.getElementById('firstName').value.trim()
  const lastName = document.getElementById('lastName').value.trim()
  const roadType = document.getElementById('roadType').value
  const favoriteColor = document.getElementById('favoriteColor').value.trim()
  const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

  //Run Name Generating Functions & store them in new variables
  const prefix = genPrefix(firstName)
  const newFirstName = genFirstName(firstName)
  const middleName = genMiddleName(roadType, favoriteColor)
  const newLastName = genLastName(lastName)
  const suffix = genSuffix(favoriteAnimal)

  //Capitalize Name Variables when needed
  const capitalizedPrefix = capitalize(prefix)
  const capitalizedFirstName = capitalize(newFirstName)
  const capitalizedMiddleName = capitalize(middleName)
  const capitalizedLastName = capitalize(newLastName)

  //Combine all of them name variables into a full new name

  //Display the new name

}

//Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}