import { assignVars, createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

//theme 이름을 정하는 contract
export const global = createGlobalThemeContract({
  background: {
    color: 'bg-color',
  },
  foreground: {
    color: 'fg-color',
  },
});

const whiteGrobalTheme = {
  background: {
    color: 'rgb(255, 255, 255)',
  },
  foreground: {
    color: 'rgb(0, 0, 0)',
  },
};

const darkGlobalTheme = {
  background: {
    color: 'rgb(0, 0, 0)',
  },
  foreground: {
    color: 'rgb(255, 255, 255)',
  },
};

//root의 기본 global theme 값은 white
createGlobalTheme(':root', global, whiteGrobalTheme);

globalStyle(':root', {
  '@media': {
    //root의 theme가 dark일 때에 darkGlobalTheme 적용
    '(prefers-color-scheme: dark)': {
      vars: assignVars(global, darkGlobalTheme),
    },
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
    },
  },
});

globalStyle('html, body', {
  maxWidth: '100dvw',
  overflowX: 'hidden',
});

globalStyle('body', {
  color: global.foreground.color,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
