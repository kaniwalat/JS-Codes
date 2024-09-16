let date = new Date()
let dayOfWeekNumber = date.getDay()
let nameOfDay;
let quote;

switch(dayOfWeekNumber) {
    case 0:
        nameOfDay = 'Sunday'
        quote = 'Time to chillax!'
        break;
    case 1:
        nameOfDay = 'Monday'
        quote = 'Monday morning blues!'
        break;
    case 2:
        nameOfDay = 'Tuesday'
        quote = 'Taco Time!'
        break;
    case 3:
        nameOfDay = 'Wednesday'
        quote = 'Two more days to the weekend.'
        break;
    case 4:
        nameOfDay = 'Thursday'
        quote = 'The weekend is almost here...'
        break;
    case 5:
        nameOfDay = 'Friday'
        quote = 'Weekday is here!'
        break;
    case 6:
        nameOfDay = 'Saturday'
        quote = 'Time to party!'
        break;
}

let weekday = document.getElementById('weekday')
weekday.innerHTML = `${nameOfDay}`

let phrase = document.getElementById('phrase')
phrase.innerHTML = `${quote}`