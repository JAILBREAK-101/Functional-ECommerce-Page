// LEARNING DOM MANIPULATION.
// GETTING ELEMENTS FOR MANIPULATION.

// USING EACH METHOD TO SELECT ELEMENTS.
let selection_1 = document.getElementById('ul');

let selection_2 = document.getElementsByClassName('li');

// USING QUERY SELECTOR
let selection_3 = document.querySelector('.header1');
let selection_4 = document.querySelector('.header2');
let selection_5 = document.querySelector('.header3');

// Using tag-name selector
const anchor = document.getElementsByTagName('a');

// LOGGING THIS ON THE CONSOLE GIVES US AN ARRAY
// (AN UNORDERED LIST, IS AN ARRAY OF LIST ITEMS)
console.log(selection_1);

// QUERYSELECTOR ALL IS USED TO SELECT ALL THE ELEMENTS OF THAT TYPE, WITH THAT CLASS. (but an id is unique).

// APPLYING STYLES TO AN HTML ELEMENT USING JAVASCRIPT
selection_3.style.color = 'red';

// USING JS TO STYLE AN HTML TAG, THE CSS IS WRITTEN IN CAMEL-CASING.
selection_4.style.textDecoration = 'overline';
// use a for loop to apply an inline style to the elements that are nested in other or more than 1 element.

let new_li = document.createElement('li');

// append it with to the ul.
selection_1.append(new_li);

// INNER TEXT SHOWS THE PLAIN TEXT.
// TEXT CONTENT SHOWS THE WAY THE TEXT IS IN OUR CODE.
// INNER HTML IS SIMILAR TO TEXT CONTENT, EXCEPT IT CONTAINS THE TAGS (very dangerous).

new_li.innerHTML = 'LO-GIN'

// ADDING CLASS TO THE MY CREATED LI
new_li.setAttribute('class', 'li');
new_li.setAttribute('id', 'li');

// ADDING A CLASS, REMOVING A CLASS, REMOVING AN ELEMENT.
