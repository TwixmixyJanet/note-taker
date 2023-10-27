# JANET'S NOTE TAKER APP

### [View Project Here](https://powerful-sands-89048-f5ddf490c9b5.herokuapp.com/ "JANET'S NOTE TAKER APP")<br />
![image of JANET'S NOTE TAKER APP](/public/assets/img/projectimage.png "image of JANET'S NOTE TAKER APP")
| Technology Used    | Resource URL |
| --------  | ------- |
| NodeJS      | https://nodejs.org/en |
| Express | https://www.npmjs.com/package/express |
| FS      | https://nodejs.org/api/fs.html |
| Path     | https://www.npmjs.com/package/path |
| Heroku | https://www.heroku.com/ |
| JavaScript | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| Git       | https://git-scm.com/ |
| GitHub     | https://github.com/ |
| VSCode    | https://code.visualstudio.com/ |


## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description:
This note taker app can be used to collect all of your thoughts, feelings, and very important blobs of information.<br />
<br />

#### How to use this app:

* Click the link above "View Project Here"
* Click the "Get Started" button
* Type a title into the title field
* Type text into the text field
* Click the "Save Note" button, or click the "Clear Form" button to reset the note
* Add as many notes as needed
* Use the trash bin icon to delete any notes needing to be removed
* Data will remain updated to your needs. Refresh to check!

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

### Lessons Learned

#### 1. Manipulating JSON Database
For me, this is when it begins to get exciting. One of my favorite aspects was to see that the updates being made through the UI were updating the database JSON file.
<br />
![lesson 1](/public/assets/img/lesson1.png)
<br />Write to the database:<br />
![lesson 1](/public/assets/img/lesson1b.png)
<br />Delete from the database:<br />
![lesson 1](/public/assets/img/lesson1c.png)

#### 2. ExpressJS
This is a new NPM that adds a layer on top of NodeJS to help manage servers and routes. Express is literally used for everything on the server, but I'm highlighting it's import information, middleware, and posting of the PORT.
<br />
![lesson 2](/public/assets/img/lesson2.png)<br />
![lesson 2](/public/assets/img/lesson2b.png)<br />
![lesson 2](/public/assets/img/lesson2c.png)

#### 3. GET / POST / DELETE
Using ExpressJS enables the ability to manipulate the application through the server file(s). For this I want to highlight the get routes implemented to handle navigating through the app. Specifically the wildcard (*). The wildcard would allow for any random URL off the base URL typed in to renavigate the user to the URL of your choice. Most websites would use this to navigate to the 404 page. Additionally there's the ability to POST. For this app it's being used to create a new note. Then also DELETE is being used to allow for the deleting of a note.
<br />
![lesson 3](/public/assets/img/lesson3.png)<br />
![lesson 3](/public/assets/img/lesson3b.png)

#### 4. Heroku
Another new platform! Using Heroku allows for a server based app to be deployed and function live. It functions from the command-line interface, like Git and GitHub, and can be implemented similarly.
<br />
![lesson 4](/public/assets/img/lesson4.png)

#### Synopsis
A lot of aspects of front end and back end development are coming together with this app. This challenge really illustrates how far this course has come in terms of knowledge. There's simply no way this could have been accomplished 5 weeks ago.

## Installation

1. Create a new repository on GitHub, to store this project.
2. Clone the repository to your computer.
3. Copy files to your own repository.
4. Follow the steps for "How to" above
5. Make changes to the code.
6. Commit the changes to the local repo.
7. Push the changes to the remote repo.
8. Additionally do the same with Heroku

## Usage

This is a live note taking app. If you would like to use this app follow the installation steps and curate it to your needs. If you would like to use this app to take your own notes, follow the steps under the description above and click the link at the top of this page.

## License

MIT License
Copyright (c) 2023 Twixmixy / Janet Webster

<hr />

## About The Author
### Janet Webster
Full Stack MERN Software Engineer in training.

- [GitHub](https://github.com/TwixmixyJanet/)
- [LinkedIn](https://www.linkedin.com/in/twixmixy/)
- [Twitter](https://twitter.com/Twixmixy)
- [WakaTime](https://wakatime.com/@Twixmixy)

![Janet with her dog Winona on the beach](https://avatars.githubusercontent.com/u/117195025?v=4)