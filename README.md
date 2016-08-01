# Base16 HyperTerm

Generate themes for HyperTerm with Base16-Builder

![screenshot of AtelierSulphurpool-Dark in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-base16-solarized-dark-screenshot.png)
Base16-Solarized-Dark

![screenshot of AtelierSulphurpool-Light in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-base16-solarized-light-screenshot.png)
Base16-Solarized-Light

![screenshot of AtelierSulphurpool-Dark in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-atelier-sulphurpool-dark-screenshot.png)
AtelierSulphurpool-Dark

![screenshot of AtelierSulphurpool-Light in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-atelier-sulphurpool-light-screenshot.png)
AtelierSulphurpool-Light

### Installation

1. Make a folder in `.hyperterm_plugins/local/` like for example `hyperterm-base16-solarized-dark`, and copy the `package.json` and one of your favorite themes like `base16-solarized-dark` from the `index`-folder over there.
1. Rename `base16-solarized-dark.js` to `index.js`
1. Adapt `package.json` to the correct names.
1. Open HyperTerm's preferences by pressing `Cmd+,` or manually at `~/.hyperterm.js`.
1. Find and Update the plugins array to one of the themes from the `index` folder.
```js
  plugins: [
    'hyperterm-base16-solarized-dark'
  ],
```
1. Reload HyperTerm by pressing `Cmd + Shft + R`

### Base16 Builder
Made with [Base16 Builder](https://github.com/base16-builder/base16-builder), one will need to have Base16 Builder installed from NPM to regenerate the themes, or to create your own from a custom colorscheme. For convenience I use the `io.sh` bash script to output all of the themes to the `index` folder from the commandline with one small command: `io.sh`.

### Credits
- Original [Solarized colorscheme by Ethan Schoonover](http://ethanschoonover.com/solarized)
- [@Ghosh](https://github.com/Ghosh/hyperterm-solarized-dark) for [Solarized Dark for HyperTerm](https://github.com/Ghosh/hyperterm-solarized-dark)
- Base16
  - [@chriskempson](https://github.com/chriskempson)
  - [@alexbooker](https://github.com/alexbooker)
  - [@aloisdg](https://github.com/aloisdg)

Released under [MIT Licence](http://atelierbram.mit-license.org)
