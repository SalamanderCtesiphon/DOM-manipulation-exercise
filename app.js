const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const paragraph = document.createElement('p');
content.classList.add('paragraph');
paragraph.textContent = 'Hey, I\'m red!';
paragraph.style.color = 'red';

container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.classList.add('heading');
heading.textContent = "I'm a blue h3!";
heading.style.color = 'blue';

container.appendChild(heading);


const card = document.createElement('div');
card.classList.add('card');
card.style.border = "1px solid black";
card.style.backgroundColor = "pink";

container.appendChild(card);

const headerOne = document.createElement('h1');
headerOne.textContent = 'I\'m a div';
card.appendChild(headerOne);

const para = document.createElement('p');
para.textContent = "ME TOO!";
card.appendChild(para);

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = "white";
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});