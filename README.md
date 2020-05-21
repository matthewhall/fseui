# fsui

A Firestore Emulator UI.

## Getting started

### Install

```
$ npm install fsui
```

### Usage

Ensure your Firestore emulator is running then:

```
$ fsui
```

The emulator UI will run on `9000` by default but you can adjust this by setting supplying a `--port` argument.

#### Firestore rules

This app does nothing fancy when it comes to getting around any rules you have set in your `firestore.rules` file yet; just rename it or comment these out for now.

## Limitations

At the moment, this UI serves as a very basic emulator data viewer styled to look like the Firebase Console UI. There is no POSTing, PATCHing or DELETEing of data, only GET. Additionally, nested collections are not yet supported either.

I do, however, intend to add these features (and more) in the future once time allows, I just need the time to do it. Please feel free to submit feature requests.

## Local development

```
$ npm i
$ npm run serve
```
