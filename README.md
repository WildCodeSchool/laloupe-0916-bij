# Electron Bureau Info Jeunesse BIJ

#### License [This website is the property of the UNIJ.](http://www.unij.fr/)

## Requirements

-   [Electron](http://electron.atom.io/)
-   [Electron-builder](https://github.com/electron-userland/electron-builder)
-   [Electron-prebuilt](https://github.com/electron-userland/electron-prebuilt)
-   [Bower](https://bower.io/)

## Installation

```bash
git clone git@github.com:WildCodeSchool/laloupe-0916-bij.git
cd laloupe-0916-bij.git
npm install
bower install
```

## Development

npm start

## Production

This app is part of a set of 2 app, one for BIJ users and one for package this Electron app.

This Electron application is used only for packaged app for Windows, Linux and Mac. For package app use the methods bellow

### MacOS

Use [brew](http://brew.sh/) to install required packages.

###### To build app for Windows on macOS:

brew install [wine](https://www.davidbaumgold.com/tutorials/wine-mac/) --without-x11 (require x-code)

brew install [mono](http://brewformulas.org/Mono)
To build app for Linux on macOS:

brew install gnu-tar [graphicsmagick](http://www.graphicsmagick.org/) xz

To build rpm: brew install rpm.

npm run dist

### Linux

###### To build app in distributable format for Linux:

sudo apt-get install --no-install-recommends -y icnsutils [graphicsmagick](http://www.graphicsmagick.org/) xz-utils

To build rpm: sudo apt-get install --no-install-recommends -y rpm.

To build pacman: sudo apt-get install --no-install-recommends -y bsdtar.

npm run dist

###### To build app for Windows on Linux:

Install [Wine](https://doc.ubuntu-fr.org/wine) (1.8+ is required):

sudo add-apt-repository

ppa:ubuntu-wine/ppa -y

sudo apt-get update

sudo apt-get install --no-install-recommends -y wine1.8

Install [Mono](http://www.mono-project.com/docs/getting-started/install/linux/#usage) (4.2+ is required):

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list

sudo apt-get update

sudo apt-get install --no-install-recommends -y mono-devel ca-certificates-mono

npm run dist

###### To build app in 32 bit from a machine with 64 bit:

sudo apt-get install --no-install-recommends -y gcc-multilib g++-multilib
Travis Linux

Trusty is required — default [Travis](https://docs.travis-ci.com/user/trusty-ci-environment/) Linux dist is outdated and icnsutils version is non-functional.

sudo: required
dist: trusty

npm run dist

### Windows

Please use [Docker](https://github.com/electron-userland/electron-builder/wiki/Docker).

npm run dist


#### After package.

Zip the folder bellow:
-   win-ia32-unpacked

Then copy/paste the files below from this app to "laloupe-0916-bij" into dist folder.
-   win-ia32-unpacked.Zip
-   levraidufaux Setup 0.1.0.exe
-   levraidufaux-0.1.0-ia32.AppImage
-   levraidufaux-0.1.0-x86_64.AppImage
-   levraidufaux-0.1.0.dmg
-   levraidufaux-0.1.0-mac.zip

#### Contributors
-   [Camille Fontaine](https://github.com/CamJr)
-   [Gaëlle Morin](https://github.com/Daedalus418)
-   [Stéphane Senocq](https://github.com/stephsen)
