import smash from '../../helpers/data/smash';

import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((cows) => {
      console.log('cow array from cowList', cows);

      // call a domStringBuilder function and pass in cows
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
