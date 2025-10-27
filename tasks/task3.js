function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    const percent = (item.medals / item.athletes) * 100;
    return {
      ...item,
      percentOfSuccess: percent.toFixed(1)
    };
  });
}

const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;
