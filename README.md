# electron-quick-start Bureau Info Jeunesse BIJ

### Requirements

-   [Electron](http://electron.atom.io/)
-   [Electron-packager](https://github.com/electron-userland/electron-packager)
-   [Electron-prebuilt](https://github.com/electron-userland/electron-prebuilt)
-   [Bower](https://bower.io/)

### Auto-install

[]()

### Execution
 npm start

#### Installation

```bash
git clone git@github.com:WildCodeSchool/laloupe-0916-bij.git
cd laloupe-0916-bij.git
npm install
bower install
```

#### Development

```bash
npm install electron-packager
npm electron-prebuilt
npm run build
```

#### Production

```bash
-   macOS

Use brew to install required packages.

To build app for Windows on macOS:

brew install wine --without-x11 (require x-code)
brew install mono
To build app for Linux on macOS:

brew install gnu-tar graphicsmagick xz
To build rpm: brew install rpm.

-   Linux

To build app in distributable format for Linux:

sudo apt-get install --no-install-recommends -y icnsutils graphicsmagick xz-utils
To build rpm: sudo apt-get install --no-install-recommends -y rpm.

To build pacman: sudo apt-get install --no-install-recommends -y bsdtar.

To build app for Windows on Linux:

Install Wine (1.8+ is required):

sudo add-apt-repository ppa:ubuntu-wine/ppa -y
sudo apt-get update
sudo apt-get install --no-install-recommends -y wine1.8
Install Mono (4.2+ is required):

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list
sudo apt-get update
sudo apt-get install --no-install-recommends -y mono-devel ca-certificates-mono
To build app in 32 bit from a machine with 64 bit:

sudo apt-get install --no-install-recommends -y gcc-multilib g++-multilib
Travis Linux

Trusty is required — default Travis Linux dist is outdated and icnsutils version is non-functional.

sudo: required
dist: trusty
Windows

Please use Docker.
```

#### Contributors
-   [Camille Fontaine](https://github.com/CamJr)
-   [Gaëlle Morin](https://github.com/Daedalus418)
-   [Stéphane Senocq](https://github.com/stephsen)

#### License [CC0 1.0 (Public Domain)](LICENSE.md)

## CSS Structure and Rules

**List of different CSS Structure**

-   element_type
-   namepage_type

exemple : navbar_logo
