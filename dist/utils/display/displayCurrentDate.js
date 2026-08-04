export function displayCurrentDate() {
    const today = new Date();
    const formatedDate = new Intl.DateTimeFormat('en-us', {
        dateStyle: 'full'
    });
    const dateHTML = document.querySelector('.date');
    dateHTML.innerText = `${formatedDate.format(today)}`;
}
//# sourceMappingURL=displayCurrentDate.js.map