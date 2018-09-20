
// Background Styles
const backgroundColor = '#292D3E';
const foregroundColor = '#bcc0d1';
const borderColor = 'rgba(41, 45, 62, 0.8)';
const selectionColor = 'rgb(117, 128, 184, 0.7)';

// Font Styles
const fontSize = '14';
const fontFamily = 'Dank Mono';
const fontWeight = 'normal'
const fontWeightBold = 'Bold';

// Cursor styles
const cursorColor = '#7e57c2';
const cursorAccentColor = '#000';
const cursorShape = 'BEAM';
const cursorBlink = 'false';

const padding = '10px 15px';

// Colors
const colors = {
  black: '#000000',
  red: '#E53935',
  green: '#00897B',
  yellow: '#FDD835',
  blue: '#1E88E5',
  magenta: '#FF4081',
  cyan: '#4FC3F7',
  white: '#C7C7C7',
  lightBlack: '#686868',
  lightRed: '#E57373',
  lightGreen: '#4DB6AC',
  lightYellow: '#FFF176',
  lightBlue: '#64B5F6',
  lightMagenta: '#F48FB1',
  lightCyan: '#B3E5FC',
  lightWhite: '#FFFFFF',
};

// CSS Styles
const css = `
  .hyper_main {
    border - width: 1px;
    border - style: solid;
    box - shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.103);
  } 
  .header_header {
    color: #eee;
  }
  .tab_tab {
    border: 0;
  }  
  .tab_tab {
    border: 1px solid #272B3B!important;
  }
  .tab_tab.tab_active {
    background: #292D3E;
    border: 1px solid #262A39!important;
    color: #eeffff; transition: all .2s ease -in -out;
  }
  .tab_tab: not(.tab_active) {
    background: #31364A;
    border: 1px solid #262A39!important;
    color: #929ac9;
  }
  .tab_tab: not(.tab_active): hover {
    transition: background 100ms ease;
  }
  .tab_icon {
    width: 15px;
    height: 15px;
  }	
  .splitpane_divider {
    background - color: #30334c!important;
  }
`;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    selectionColor,
    cursorColor,
    cursorAccentColor,
    cursorShape,
    cursorBlink,
    fontSize,
    fontFamily,
    fontWeight,
    fontWeightBold,
    padding,
    colors,
    css: `
      .hyper_main {
        border-width: 1px;
        border-style: solid;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.103);
      }
    `,
  });
}