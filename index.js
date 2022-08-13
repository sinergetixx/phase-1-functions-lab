// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location >= 42){
        return location - 42
    } else if (location <= 41){
        return 42 - location
    }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start, destination){
    let southDistance = (destination-start)*264
    let northDistance = (start-destination)*264
    if (start > destination){
        return northDistance
    } else if (destination > start)
        return southDistance
}

function calculatesFarePrice(start, destination){
    let farePrice
    let southDistance = (destination-start)*264
    let northDistance = (start-destination)*264
    if (start > destination){
        if (northDistance > 2500){
            return 'cannot travel that far'
        } else if (northDistance > 2000){
            farePrice = 25
            return farePrice
        } else if (northDistance > 400){
            farePrice = (northDistance-400) * 0.02
            return farePrice
        } else if (northDistance <= 400){
            farePrice = 0
            return farePrice
        }
    } else if (destination > start){
        if (southDistance > 2500){
            return 'cannot travel that far'
        } else if (southDistance > 2000){
            farePrice = 25
            return farePrice
        } else if (southDistance > 400){
            farePrice = (southDistance-400) * 0.02
            return farePrice
        } else if (southDistance <= 400){
            farePrice = 0
            return farePrice
        }
    }
}