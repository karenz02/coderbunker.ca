import { createGlobalStyle } from 'styled-components';

import din from '../assets/fonts/din_alternate_bold-webfont.woff';
import ms from '../assets/fonts/monetasans-black-webfont.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: "MonetaSans";
    src: url(${ms});
  }
  @font-face {
    font-family: "Din";
    src: url(${din});
  }
  html {
    font-family: Din, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  p, li {
    letter-spacing: 0.05em;
  }
  h1 {
    font-family: MonetaSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1 ,h2 ,h3 ,h4 ,h5 ,h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default Typography;
