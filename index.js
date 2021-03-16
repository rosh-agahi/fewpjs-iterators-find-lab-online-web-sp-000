const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teams) {
  let winningTeam = teams.find(teams => teams.result === "W");
  if (winningTeam) {
    return winningTeam.year;
  } else {
    return undefined;
  }
}