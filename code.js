const { chromium } = require('playwright');
//const { trapEventsOnPage } = require("../playwrightHelper");

const mysql =require('mysql');
const express = require('express');
var app =express();
const bodyparser = require('body-parser');

app.use(bodyparser.json)

var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'pass',
  database:'data'
});


mysqlConnection.connect((err)=>{
  if(!err)
  console.log('DB Connected');
  else
  console.log('DB not connect ' + JSON.stringify(err,undefined,2));
})

app.listen(3306,()=>console.log('Express server is running at port'));

app.get('/employees',(res,req)=>{
  mysqlConnection.query('select * from new_table',(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);
  })
});



const WHATSAPP_WEB_URL = "https://web.whatsapp.com/"
const whatsappContact = "BEM😍🥰☺"

const message = "My message from the WhatsApp robot.This is automated generated code."

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage();

  await page.goto(WHATSAPP_WEB_URL);

  // wait for element search box
  await page.waitForSelector('#side > div.SgIJV > div > label > div > div._2_1wd.copyable-text.selectable-text')
  // enter name of contact in search box
  await page.fill('#side > div.SgIJV > div > label > div > div._2_1wd.copyable-text.selectable-text', whatsappContact);

  // page filters list of contacts
  await page.waitForSelector(`span[title="${whatsappContact}"]`)
  // click on the contact - this refreshes the right pane with recent messages and a box for sending new messages
  await page.click(`span[title="${whatsappContact}"]`)

  const popularLanguages = await page.$eval('#main > div._2wjK5 > div > div > div._11liR' , el => el.innerText)
//assert(popularLanguages.length > 0)
const popularLanguages1 = await page.$$('#main > div._2wjK5 > div > div > div._11liR')
console.log(popularLanguages)
let tableCell03 = await popularLanguages1[1];
console.log(tableCell03)
  // wait for the field to send a message
  await page.waitForSelector('text=Type a message')
  // type the message to send
  await page.type('text=Type a message', message)
  // click button to send message
 // await page.click('#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button > span')
  // let tableCell01;
  // let tableCell01Val;
  // let tableCell02;
  // let tableCell02Val;
  // const tableRows =  await page.$$('#main > div._2wjK5 > div > div > div._11liR');
  // for (let i=1; i < tableRows.length; i++)
  // {
  //   tableRows = tableRows[i];
  //   tableCell01 = await tableRows.$('main:nth-child(1) a')
  //   tableCell01Val = await page.evaluate( tableCell01 => tableCell01.innerText, tableCell01);
  //   tableCell02 = await tableRows.$('main:nth-child(2)');
  //   tableCell02Val = await page.evaluate( tableCell02 => tableCell02.innerText, tableCell02);
  //   console.log('\n');
  //   console.log('Name' +tableCell01Val);
  //   console.log('message: ' +tableCell02Val);
  //   console.log('Iteratoe: ' +i);

  // }

  
  await sleep(50000000) // 1000* 50 seconds
  //await browser.close()
})()

