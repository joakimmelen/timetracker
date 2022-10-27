##### Hello and welcome to my amazing app:

# THE TIME TRACKER.. Machine!

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Styling](#styling)
* [Setup](#setup)


## General info
This app will not blow your mind. But it blew mine creating it. From stress.
 If you have any requests for updates and/or functions to implement, please email to 
 bill-the-gaterader@microchill.cn

## Technologies
Project is created with:

#### React & React Router  
By obvious reasons. Even though I don't love it.

#### Axios  
Which I picked because some (that will remain unnamed) people in my class yelled (bascially) at me to get Axios and stop using vanilla fetch.
Here we are..  
"axios": "^1.1.3" https://github.com/axios/axios

#### Day.js  
Started using regular dates. But, then again, with some.. lets call it input.. from other classmates I felt forced to try, and use, Day.js.  
"dayjs": "^1.11.6" https://day.js.org/

#### JSON Server  
It said in the description that we were going to use it for our backend/database. So I did.   
"json-server": "^0.17.0" https://github.com/typicode/json-server

#### React-Calendar  
I tried airbnbs react dates first. Too gritty. I started doing everything myself, vanilla style, but ran into this calendar. 
Simple date picker with styling so I decided to use it. Does what I wanted for this purpose.  
"react-calendar": "^3.9.0" https://www.npmjs.com/package/react-calendar


## Styling
The whole application is styled with CSS Modules. I use this because it has the best autocomplete and my Achilles heel (one of many) in CSS is naming. With modules they do not clash/crash. Which I like.

## Setup 
To run this project, install it locally using npm:

```
$ cd ../timetracker
$ npm install
$ json-server --watch db.json
$ npm run dev
```
