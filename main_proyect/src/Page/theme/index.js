import { createMuiTheme } from '@material-ui/core';

import palette from './Palette';
import overrides from './overrides';

const titleFontFamily = [
  "klavika",
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')

const normalFontFamily = [
  "Calibri",
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: normalFontFamily,
  },
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  appButton: {
    width: '190px',
  },
});

theme.typography.h1 = {
  marginBottom: '.5rem',
  fontFamily: titleFontFamily,
  fontWeight: '400',
  lineHeight: '1.2',
};

theme.typography.h2 = {
  marginBottom: '.5rem',
  fontFamily: titleFontFamily,
  fontWeight: '400',
  lineHeight: '1.2',
};

theme.typography.h3 = {
  marginBottom: '.5rem',
  fontFamily: titleFontFamily,
  fontWeight: '400',
  lineHeight: '1.2',
};

theme.typography.h4 = {
  marginBottom: '.5rem',
  fontFamily: titleFontFamily,
  fontWeight: '400',
  lineHeight: '1.2',
};

theme.typography.h5 = {
  marginBottom: '.5rem',
  fontFamily: titleFontFamily,
  fontWeight: '400',
  lineHeight: '1.2',
};

theme.typography.body1 = {
  margin: 0,
  fontFamily: normalFontFamily,
  fontSize: '1.15rem',
  fontWeight: '400',
  lineHeight: '1.2',
  fill: 'currentColor',
};

export default theme;
