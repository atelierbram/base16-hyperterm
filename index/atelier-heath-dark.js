/* Base16 Atelier Heath Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#1b181b';
const foregroundColor = '#9e8f9e';
const borderColor = '#1b181b'; // same as background-color, might as well say "transparent"
const cursorColor = '#bb8a35'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#ca402b', // red
  '#918b3b', // green
  '#bb8a35', // yellow
  '#516aec', // blue
  '#7b59c0', // violet
  '#159393', // cyan
  '#d8cad8', // light gray
  '#695d69', // medium gray
  '#ca402b', // red
  '#695d69', // green
  '#776977', // yellow
  '#9e8f9e', // blue
  '#7b59c0', // violet
  '#159393', // cyan
  '#f7f3f7', // white
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
         color: #9e8f9e !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #1b181b !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #695d69 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #d8cad8 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #1b181b !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #1b181b !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

