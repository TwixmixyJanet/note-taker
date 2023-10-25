const PORT = 3001;
const express = require('express');
const fs = require('fs');
const path = require('path');
const databaseNotes = require('./db/db.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

