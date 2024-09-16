let name = prompt('Enter Your Name, Please.', 'JSBeginner')
let today = new Date()

let hrs = today.getHours()
document.writeln('<br>')
document.writeln('<br>')

if (hrs <= 12) {
    document.write('Good Morning, ' + name + '!')
} else if (hrs <= 18) {
    document.write('Good Afternoon, ' + name + '!')
}
document.write('<br>')