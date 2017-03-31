import {
  CHANGE_THEME
} from '../actions/types';

import Colors from '../themes/Colors';

const initialState = {
  theme: 0,
  alpha: Colors.skyDolchAlpha,
  mod: Colors.skyDolchMod,
  legend: Colors.skyDolchLegend,
  secondLegend: Colors.skyDolchSecondLegend,
  legendHex: Colors.skyDolchLegendHex,
  legendTranslucent: Colors.skyDolchLegendTranslucent
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.value,
        alpha: action.alpha,
        mod: action.mod,
        legend: action.legend,
        secondLegend: action.secondLegend,
        legendHex: action.legendHex,
        legendTranslucent: action.legendTranslucent
      };
    default:
      return state;
  }
};
