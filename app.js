const fs = require('fs');
const path = require('path');
const CreateStudents =require('./CreateStudents');

const mkdirSync = function (dirPath) {
    try {
        fs.mkdirSync(dirPath)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
};
mkdirSync(path.resolve('./jscx-1800/'));

mkdirSync(path.resolve('./jscx-1800/Viktor'));

mkdirSync(path.resolve('./jscx-2000/'));

mkdirSync(path.resolve('./jscx-2000/Okten'));

let data ='okten, 3 years old, student';
//Створення  файлу даних про студента
fs.writeFile('./jscx-2000/Okten/Info)',data, {flags:'a'},(err)=>{
    if (!err){
        console.log('ok');
    }
});
fs.writeFile('./jscx-1800/Viktor/Info',data, {flags:'a'},(err)=>{
    if (!err){
        console.log('ok');
    }
});

// ФОто потрібно скопіювати в папку з профіайлом студента стрімами.

function StudentsPhoto(setPhoto, getPhoto){
    fs.createReadStream(getPhoto).pipe(fs.createWriteStream(setPhoto));
}

StudentsPhoto('./jscx-1800/Viktor/images.jpg','../images.jpg');

// * Поміняти місцями студентів з 18 та з 20 години
fs.rename('jscx-1800', 'jscx-2000', (err)=> {
    if(!err){
        console.log('Ok');
    }
});
fs.rename('jscx- 2000', 'jscx-1800',(err)=> {
    if(!err){
        console.log('Ok');
    }
});

CreateStudents ('Vasya','jscx-2000','age 188 years old, alone ');