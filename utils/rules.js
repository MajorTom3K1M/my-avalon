// * game states * //
const states = [
  "wait",
  "randomCharacters",
  "sendMission",
  "vote",
  "mission",
  "missionSuccess",
  "missionFail",
  "update",
  "findMerlin",
  "evilWin",
  "goodWin",
];

const good_evil_count = [
  [3, 2],
  [4, 2],
  [4, 3],
  [5, 3],
  [6, 3],
  [6, 4],
];

const team_assignment = [
  [[2, 3, 2, 3, 3], false],
  [[2, 3, 4, 3, 4], false],
  [[2, 3, 3, 4, 4], true],
  [[3, 4, 4, 5, 5], true],
  [[3, 4, 4, 5, 5], true],
  [[3, 4, 4, 5, 5], true],
];

module.exports = {
  states,
  team_assignment,
  good_evil_count,
};
