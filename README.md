# Discover Electron (Website) [![Dependency Status](https://img.shields.io/gemnasium/DiscoverElectron/discoverelectron-metalsmith.svg)](https://gemnasium.com/DiscoverElectron/discoverelectron-metalsmith)

This is the source code for the website [discoverelectron.com](https://www.discoverelectron.com/).

The contents themselves are versioned separately as a submodule. You can find them at <https://github.com/DiscoverElectron/discoverelectron-contents>.


## Install

If you have [io.js](https://iojs.org/) installed on your system, just run:

```sh
$ npm install
```


## Build

To build the site, do:

```sh
$ npm run build
```

If you want to see debugging info, set the `DEBUG` environment variable:

```sh
$ DEBUG='metalsmith:*' npm run build
```

I'm using the [debug](https://www.npmjs.com/package/debug) package, so you can do more complex things like:

```sh
$ DEBUG='metalsmith:*,-metalsmith:ignore,-metalsmith:path' npm run build
```


## Watch

If you want to rebuild the site every time you change a file, run this instead:

```sh
$ npm run watch
```


## Icons

To generate all icons, do:

```sh
$ npm run icons
```

This will invoke [ImageMagick](http://www.imagemagick.org/)'s `convert -resize` to create `.ico` files, and [Inkscape](http://www.inkscape.org/)'s `inkscape --export-png` to create `.png` files.

**NOTE:** You will need to have [ImageMagick](http://www.imagemagick.org/) and [Inkscape](http://www.inkscape.org/) installed (obviously):

```sh
$ brew install imagemagick inkscape
```


## Meta

* Code: `git clone git://github.com/DiscoverElectron/discoverelectron-metalsmith.git`
* Home: <https://www.discoverelectron.com/>


## License

Copyright (c) 2015 Daniel Perez Alvarez. This is free software, and may be redistributed under the terms specified in the LICENSE file.

The contents of the website are licensed separately. Please see <https://github.com/DiscoverElectron/discoverelectron-contents>.
