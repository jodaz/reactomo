import { RESET_TIMER } from './types';
import { clearLS } from '../../../../../utils/handLS';

export const resetTimer = () => {
  clearLS();
  return {
    type: RESET_TIMER,
    payload: {
      breakLength: 5,
      sessionLength: 25,
      isRunning: false
    }
  }
}
