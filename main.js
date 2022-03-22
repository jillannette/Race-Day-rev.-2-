let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 18; 

if (runnerAge > 18 && earlyRegistration) {
  console.log(`'Your race time is 9:30 a.m. and your race number is ${raceNumber + 1000}.'`); 
} else if (runnerAge > 18 && !earlyRegistration) {
  console.log(`'Your race time is 11:00 a.m. and your race number is ${raceNumber + 1000}.'`);
}
if (runnerAge < 18) {
  console.log(`'Your race time is 12:30 p.m. and your race number is ${raceNumber}.'`);
} else {
  console.log('Please see the registration desk');
}
