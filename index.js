require('datejs');
// necessary to use 'datejs'

function combineUsers(...args){
  const combinedObject = { // the return object
    users: [] // array for all merged usernames
  }

  // loop through args
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]]; // to merge arrays
  }

  const currentDate = new Date().toString('M/d/yyyy');
    combinedObject.merge_date = currentDate;
  // to get today's date

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};