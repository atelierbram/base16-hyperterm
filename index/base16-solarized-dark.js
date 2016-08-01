/* Base16 Solarized Dark colorscheme by Ethan Schoonover (http://ethanschoonover.com/solarized)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#002b36';
const foregroundColor = '#839496';
const borderColor = '#002b36'; // same as background-color, might as well say "transparent"
const cursorColor = '#b58900'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#eee8d5', // light gray
  '#586e75', // medium gray
  '#dc322f', // red
  '#586e75', // green
  '#657b83', // yellow
  '#839496', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#fdf6e3', // white
  foregroundColor
]

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .5 !important;
       }
    `,
    css: `
      ${config.css || ''}
      * {
         font-weight: 400;
       }
       .tabs_title,
       .tab_tab {
         color: #839496 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #002b36 !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #586e75 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #eee8d5 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #002b36 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #002b36 !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

