function superbowlWin(array) {
    let foundElement = array.find(isItAWin)
    return array.indexOf(foundElement) != -1 ? foundElement.year : undefined
}

function isItAWin(element) {
    return (element.result === "W")
}