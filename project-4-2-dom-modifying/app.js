// Q. Select the section with an id of container without using querySelector.
document.getElementById('container')
// Q. Select the section with an id of container using querySelector.
document.querySelector('#container') 
// Q. Select all of the list items with a class of “second”.
document.getElementsByClassName('second')
// Q. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol li.third')
// Q. Give the section with an id of container the text “Hello!”.
const section = document.querySelector('section#container');
section.innerText = 'Hello!';     
// Q. Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');
// Q. Remove the class main on the div with a class of footer.
footer.classList.remove('main');
// Q. Create a new li element.
const newLi = document.createElement('li');
// Q. Give the li the text “four”.
newLi.innerText = "four";
// Q. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);
// Q. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olLis = document.querySelectorAll('ol li');
for(let li of olLis ) {
    li.style.backgroundColor = 'green';
}
// Q. Remove the div with a class of footer
const footerRemove = document.querySelector('.footer');
footerRemove.remove();