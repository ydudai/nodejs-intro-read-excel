import fs from "node:fs/promises";
import fsa, { rename } from "node:fs";

//Q: 1
//----------------------------------
async function myReadFile() {
    try {
        const data = await fs.readFile('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\mytext.txt', { encoding: 'utf8' });
        let numwords = countWords(data);
        console.log("numwords " + numwords);
        console.log("--------------------------");

    } catch (err) {
        console.log(err.message);
    }
}

function countWords(data) {
    let numwords = data.split(' ').length;
    return numwords;
}

myReadFile();


// Q: 2
// ----------------------------------
import readXlsxFile from 'read-excel-file/node';

// File path.
readXlsxFile('./degree.xlsx').then((rows) => {
    let nums = [];
    let newArr = rows.filter((e, i) => {
        if (i > 0) {
            nums.push(e[1]);
        }
    });
    const average = nums.reduce((a, b) => a + b) / nums.length;
    console.log("average = " + average);
})




