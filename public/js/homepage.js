const numberOfComments = document.getElementsByClassName('commentLength');

console.log(numberOfComments)

for (const c of numberOfComments) {
    if (c.textContent == 1) {
        c.textContent = '1 comment'
    } else {
        let commentNumber = c.getAttribute('commentLength');
        c.textContent = commentNumber + ' comments'
    }
}