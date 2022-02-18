const buyClay = () => {
  const clayObj = {}

  return clayObj
}

const makePottery = (clayObj) => {
  clayObj.shape = "bowl"

  return clayObj
}

const bisqueFire = (clayObj) => {
  clayObj.readyForGlazing = true

  return clayObj
}

const glazePottery = (clayObj) => {
  if (clayObj.readyForGlazing === true) 
  {
    clayObj.glazing = "Midnight Blue"
    return clayObj
  } else { 
    console.log(`Make sure you bisque fire the pottery before you glaze it.`)
  }
}

const finalFiring = (clayObj, kilnTemp) => {
  if (kilnTemp > 1200) 
  {
    clayObj.cracked = true;
  }
  else if (kilnTemp <= 1200)
  {
    clayObj.cracked = false;
  }

  return clayObj
}

// const firedPottery1400 = finalFiring(clayObj, 1400)
// console.log(firedPottery1400)

const firedPottery = () => {
  let clay = buyClay()
  makePottery(clay)
  bisqueFire(clay)
  glazePottery(clay)
  finalFiring(clay, 1400)

  return clay
}

let potteryPiece = firedPottery()

console.log(potteryPiece)

