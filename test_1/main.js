// test 1: 
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

// test 2: 
const messgeInterval = () => {
    let counter = 1;
    const intervalId = setInterval(() => {
        console.log("Прошла секунда", counter);
        counter++;
    }, 1000);
};

messgeInterval();

// test 3: 
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i); 
        i++; 
        if (i > 10) {
            clearInterval(interval);
            console.log("Остановка вывода.");
        }
    }, 1000); 
};

count();

// test 4: 
const block = document.getElementById('block');

block.addEventListener('click', () => {
    block.classList.toggle('colored');
});

// test 5:
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = () => {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error('Ошибка:', xhr.status);
    }
};
xhr.send();