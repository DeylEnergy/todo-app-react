const toHumanDate = date => {
  // date = yyyy-mm-dd
  const time = new Date(date).toDateString().split(' ');
  const humanTime = `${time[1]} ${time[2]}`; // Jan 1
  return humanTime;
};

export default toHumanDate;
