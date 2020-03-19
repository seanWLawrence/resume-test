# react-resume

A modern, clean resume designed for web developers.

## Features

- Modern design
- One-click deploy
- Mobile-friendly
- Easily customizable/extensible
- 100% accessibility score on Google Lighthouse
- TypeScript/SASS/React setup with
    [create-react-app](https://create-react-app.dev)

## Getting started

### One-click deploy (recommended)

If you'd like to host your resume for free on Netlify, the button below will
clone this repo to your GitHub profile and deploy it automatically.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/seanWLawrence/resume">
  <img alt="Deploy to netlify" src="https://www.netlify.com/img/deploy/button.svg" width="165"/>
</a>

Then you can clone the repo locally and make your changes. Voila!

### Manual setup 

Clone this repo

```sh
git clone https://github.com/seanWLawrence/resume
```

Then you can [deploy anywhere you can deploy create-react-app](https://create-react-app.dev/docs/deployment).

## Customization

The project structure is:

```
public/ # you'll want to edit the files in this folder with your own name
  index.html # HTML template React gets injected into
  favicon.ico # these are all logos
  logo192.png
  logo512.png
src/
  assets/ # images
  components/ # sections
  data/ # resume content
  lib/
  _variables.sass
  index.sass
```

### Changing colors

- Edit `src/_variables.sass`

### Changing sections

- Edit `items` and `contents` variables in `src/Resume.tsx`

### Changing images

- Edit the files in `src/assets` and update the path in `src/data/contact`

## Contributing

Create an issue and let's talk!

## License

MIT

## Author

Sean W. Lawrence
