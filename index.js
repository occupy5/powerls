#!/usr/bin/env node
const fs = require('fs');
const colors = require('colors');
const filesize = require('filesize');

fs.readdir('./', (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        fs.stat(file, (err, stats) => {
            if (err) throw err;
            // when file is directory
            if (stats.isDirectory()) {
                console.log(`${filesize(stats.size).toString().gray} ${stats.ctime.toLocaleString('en-CA').green} ${file.yellow}/`);
            } else {
                console.log(`${filesize(stats.size).toString().gray} ${stats.ctime.toLocaleString('en-CA').green} ${file.red}`);
            }
        })
    })
})