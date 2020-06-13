# Note Taker

![GIF Walkthrough]()

#### Table of Contents
1. [Installation](#installation)
2. [Launch](#launch)
3. [Usage](#usage)
4. [Author](#author)
5. [FAQ](#faq)

## Installation

After cloning the repository, type:
```
npm install
```
to install all dependencies

## Launch

To start the express server, type:
```
npm start
```
or
```
node ./server.js
```

If you are actively debugging and making changes to the code, type:
```
npm run debug
```
which will run the application with nodemon, allowing changes to be reflected automatically without restarting the server. However, the html page will still need to be refreshed.

## Usage

This application is a lightweight, simple express application for creating, editing, and deleting notes.

When visiting the home page via localhost:3000 or whatever the hostname becomes if hosted.

Select 'Get Started' to enter the main activity.

Select an existing note in the left pane to edit an existing note, or

Select the pencil icon to pen a new note.

After editing the note(s) in the main pane, select the floppy disk save icon to save it.

To delete a note, select the trash icon next to the note.

## Author

* **Johnny Li** - *Initial work* - [reptile18](https://github.com/reptile18)
