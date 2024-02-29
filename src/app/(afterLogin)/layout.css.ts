import { globalStyle, style } from '@vanilla-extract/css';
import { global } from '@/app/globalTheme.css';

export const container = style({
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: global.background.color,
});

export const leftSectionWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  flexGrow: 1,
});

export const leftSection = style({
  width: 72,
  height: '100dvh',
  '@media': {
    '(min-width: 1300px)': {
      width: 275,
    },
  },
});

export const leftSectionFixed = style({
  position: 'fixed',
  width: 'inherit',
  padding: '0 8',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    '(min-width: 1300px)': {
      alignItems: 'flex-start',
    },
  },
});

globalStyle(`${leftSectionFixed} nav`, {
  flex: 1,
});

globalStyle(`${leftSectionFixed} nav li`, {
  listStyleType: 'none',
});

export const logo = style({
  display: 'inline-block',
  height: 56,
  marginTop: 2,
});

export const logoPill = style({
  width: 50,
  height: 50,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    backgroundColor: 'rgba(15, 20, 25, 0.1)',
  },
});

export const postButton = style({
  margin: '16px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 28px',
  backgroundColor: 'rgb(29, 155, 240)',
  width: 50,
  height: 50,
  borderRadius: 50,
  border: 'none',
  color: 'rgb(255, 255, 255)',
  fontWeight: 700,
  fontSize: 17,
  ':hover': {
    backgroundColor: 'rgb(26, 140, 216)',
  },
  '@media': {
    '(min-width: 1300px)': {
      height: 52,
      width: 234,
      borderRadius: 26,
    },
  },
});

globalStyle(`${postButton} span`, {
  display: 'none',
  '@media': {
    '(min-width: 1300px)': {
      display: 'inline-block',
    },
  },
});

globalStyle(`${postButton} svg`, {
  display: 'inline-block',
  fill: 'white',
  width: 24,
  '@media': {
    '(min-width: 1300px)': {
      display: 'none',
    },
  },
});

export const rightSectionWrapper = style({
  display: 'flex',
  alignItems: 'flexStart',
  height: '100dvh',
  flexDirection: 'column',
  flexGrow: 1,
});

export const rightSection = style({
  display: 'none',
  '@media': {
    '(min-width: 1024px)': {
      display: 'inline-block',
      width: 350,
      height: '100%',
    },
  },
});

export const rightSectionInner = style({
  height: '100%',
  width: 600,
  display: 'flex',
  justifyContent: 'space-between',
  '@media': {
    '(min-width:1024px)': {
      width: 990,
    },
  },
});

export const main = style({
  width: 600,
  height: '100dvh',
});

export const followRecommend = style({
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: 'rgb(247, 249, 249)',
  borderRadius: 16,
  margin: '12px 0',
  padding: '12px 16px',
});

globalStyle(`${followRecommend} h3`, {
  paddingBottom: 12,
});
