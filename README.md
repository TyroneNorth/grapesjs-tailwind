# Grapesjs Tailwind(WIP)

[DEMO](##)

> Requires [`grapesjs-plugin-forms`](https://github.com/artf/grapesjs-plugin-forms)

Tailwind intergration which includes the complete set of blocks from [Tailblocks.cc](https://tailblocks.cc/), bases on [Destack](https://github.com/LiveDuo/destack).

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-tailwind"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-tailwind'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}

.change-theme-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
}

.change-theme-button:focus {
  /* background-color: yellow; */
  outline: none;
  box-shadow: 0 0 0 2pt #c5c5c575;
}
```

### `Optional` CSS
```
/* Make blocks full width */
.gjs-block {
    padding: 0 !important;
    width: 100% !important;
    min-height: auto !important;
}

/* Fit icons properly */
.gjs-block svg {
    width: 100%;
}
```


## Summary

* Plugin name: `grapesjs-tailwind`
* Commands
    * `get-tailwindCss` - Get Tailwind CSS of your page(WIP: Resulting css too large)
    * `open-update-theme` - Open theme modal

### `get-tailwindCss` Usage

```js
// By default it will print css to console
editor.runCommand('get-tailwindCss');

// Using options
editor.runCommand('get-tailwindCss', { /* Options here */ });
```

#### `get-tailwindCss` Options

| Option | Description | Default |
|-|-|-
| `html` | Page markup as string | `editor.getHtml` |
| `css` | Tailwind css as string | `tailwind css from options.tailwindCssUrl` |
| `purifyOpts` | Purify option | `{ info: false, rejected: false, whitelist: [] }` |
| `callback` | Calback for resulting css | `pcss => console.log(pcss)` |


## Options

| Option | Description | Default |
|-|-|-
| `tailwindCssUrl` | URL for fetching tailwind stylesheet | `https://unpkg.com/tailwindcss/dist/tailwind.min.css` |
| `changeThemeText` | Change theme modal title | `Change Theme` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-tailwind`
* NPM
  * `npm i grapesjs-tailwind`
* GIT
  * `git clone https://github.com/Ju99ernaut/grapesjs-tailwind.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-tailwind.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-tailwind'],
      pluginsOpts: {
        'grapesjs-tailwind': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-tailwind';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/Ju99ernaut/grapesjs-tailwind.git
$ cd grapesjs-tailwind
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT