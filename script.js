// Generate prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return "Mr.";
  } else {
    return "Doctor";
  }
}

//Generate first name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  switch (firstLetter){
    case 'a':
      return 'Jeff'
      break;
    case 'b':
      return 'Pablo'
      break;
    default:
      return 'Taquavion'
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
    return `Martinez`
  }
}

//Generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length-1)
  const firstLetter = lastName.charAt(0).toLowerCase()
  if (lastLetter === 'a') {
    return 'Shadow'
  } else if(lastLetter === 'e' || lastLetter === 'r') {
    return 'Storm'
  } else if(lastLetter === 'i' || lastLetter === 't') {
    return 'Blaze'
  } else if(lastLetter === 'o' || lastLetter === 'p') {
    return 'Thorn'
  } else if(lastLetter === 'u' || lastLetter === 'n') {
    return 'Frost'
  } else if(lastLetter === 'y' && firstLetter === 'h') {
    return 'the 3rd Jr.'
  } else {
    return 'Skibidi'
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

  //Combine all of the name variables into a full new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${newLastName} ${suffix}`
  
  //Display the new name
  document.getElementById('result').textContent = fullName
}

//Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}