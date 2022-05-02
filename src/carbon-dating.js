const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (typeof sampleActivity !== 'string' || sampleActivity.length == 0 || isNaN(parseInt(sampleActivity))) return false;
  let activity = +sampleActivity;
  if (activity >= MODERN_ACTIVITY || activity <= 0 ) return false;

  return Math.ceil( (Math.log(MODERN_ACTIVITY/activity) / (0.693/HALF_LIFE_PERIOD)) ) ;
}



module.exports = {
  dateSample
};
