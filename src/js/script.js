const square = (input) => {
  return input *= input
}

// document.write(square())

const hypotenuse = (sideA, sideB) => {
  return Math.sqrt(square(sideA) + square(sideB))
}

// document.write(hypotenuse(3, 4))

const abs = (input) => {
  if (input < 0) {
    return input *= -1
  }
  return input
}

// document.write(abs(Number(prompt("Input a number to get the absolute value"))))

const emailFromLogin = (userName) => {
  return userName + "@spamcollector.net"
}

// document.write(emailFromLogin(String(prompt("Input username to get the email address"))))

const loginFromName = (firstName, lastName) => {
  let output = String(lastName.slice(0, 4)) + String(firstName.slice(0, 3))
  return output.toLowerCase()
}

// document.write(loginFromName(prompt("First name: "), prompt("Last name: ")))

const emailFromName = (firstName, lastName) => {
  return emailFromLogin(loginFromName(firstName, lastName))
}

// document.write(emailFromName(prompt("First name: "), prompt("Last name: ")))

const salary = (pay, hours, days) => {
  return pay * hours * days
}

// document.write(salary(prompt('Pay rate: '), prompt('Hours per day: '), prompt('How many days?')))

const taxed_salary = (salary, tax) => {
  return (salary - (salary * (tax / 100)))
}

// document.write(taxed_salary(salary(prompt('Pay rate: '), prompt('Hours per day: '), prompt('How many days?')), prompt("Tax rate in %: ")))

const max3 = (a, b, c) => {
  let maxNum = c

  switch (true) {
    case (a > b && a > c):
      maxNum = a
      break

    case (b > c):
      maxNum = b
      break;

    default:
      break;
  }

  return maxNum
}

// document.write(max3(prompt("First number: "), prompt("Second number: "), prompt("Third number: ")))

const spread3 = (a, b, c) => {
  let maxNum = 0
  let minNum = 0

  if (a > b && a > c) {
    maxNum = a
    if (b < c) {
      minNum = b
    } else {
      minNum = c
    }
  } else if (b > c) {
    maxNum = b
    if (a < c) {
      minNum = a
    } else {
      minNum = c
    }
  } else {
    maxNum = c
    if (a < b) {
      minNum = a
    } else {
      minNum = b
    }
  }

  return maxNum - minNum
}

// document.write(spread3(prompt("First number: "), prompt("Second number: "), prompt("Third number: ")))