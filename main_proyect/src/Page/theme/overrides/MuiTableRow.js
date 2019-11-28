import palette from '../Palette';

export default {
  root: {
    '&$selected': {
      backgroundColor: palette.background.default
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.background.default
      }
    }
  }
};
