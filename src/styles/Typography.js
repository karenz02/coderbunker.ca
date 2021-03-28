import { createGlobalStyle } from 'styled-components';
import st from '../assets/fonts/ShareTech-Regular.ttf';
import ys from '../assets/fonts/YoungSerif-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Share Tech";
    src: url(${st});
  }
  @font-face {
    font-family: "Young Serif";
    src: url(${ys});
  }
  html {
    font-family: 'Share Tech', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Young Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export default Typography;
