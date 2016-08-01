/* Base16 Solarized Light colorscheme by Ethan Schoonover (http://ethanschoonover.com/solarized)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#fdf6e3'
const foregroundColor = '#839496'
const borderColor = '#fdf6e3' // same as background-color, might as well say "transparent"
const cursorColor = '#b58900' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#586e75', // medium gray
  '#eee8d5', // light gray
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
         color: #073642 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #fdf6e3 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #002b36 !important;
       }
       .tab_text {
         background-color: #eee8d5;
         border-left: 3px solid #fdf6e3 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #fdf6e3;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

