const fs = require('fs');
const url = require('url');
const formidable = require('formidable');
const http = require('http');
const nodemailer = require('nodemailer');

/**
 * ****************************************************
 * Считываем Файл
 * Первым аргументом задаем путь к файлу который нужно прочитать
 * Втором параметром указываем кодировку
 * let content = fs.readFileSync('./folder/subtest.txt', 'utf-8');
 * console.log(content);
 * *****************************************************
 * Создаем файл с контентом
 * Первым аргументом путь где создать файл
 * Втором агрументом передаем конент
 * let text = 'New Text';
 * fs.writeFileSync('./folder/new.txt', text)
 * *******************************************************
 * Посмотреть содержимое папки
 * Первым аргументом нужно указать путь к папке
 * console.log(fs.readdirSync())
 *********************************************************
 * Удалить файл(Не папку)
 * Аргумент - имя файла который нужно удалить
 * fs.unlinkSync()
 * *******************************************************
 * Удалить папку
 * Нельзя удалить директорию пока она не пустая
 * arg - folder path
 * fs.rmdirSync()
 * 
 * Приставка sync - это синхронная версия функии
 * 3 Аргумент - функция в которой есть два параметра это error куда попадет возможная ошибка
 * и content - содержимое файла
 * fs.readFile('./folder/subtest.txt', 'utf-8', error, content) => {console.log(content)})
 * 
 */

  
 console.log("Details before changing time:");
   
 // Get the stats object of the file
 prevStats = fs.statSync("./test.txt");
   
 // Access the modified and access time of the file
 console.log("Modification Time:", prevStats.mtime);
 console.log("Access Time:", prevStats.atime);
   
 // Get the current time to change the timestamps
 let newModifiedTime = new Date();
 let newAccessTime = new Date();
   
 // Use the utimes() function to assign
 // the new timestamps
 fs.utimes(
   "./test.txt",
   newAccessTime,
   newModifiedTime,
   () => {
     // Get the stats object of the file
     console.log("\nDetails after changing time:");
   
     // Get the stats object of the file
     changedStats = fs.statSync("./test.txt");
   
     // Access the changed modified and
     // access time of the file
     console.log("Changed Modification Time:",
                          changedStats.mtime);
   
     console.log("Changed Access Time:", 
                         changedStats.atime);
   }
 );


















