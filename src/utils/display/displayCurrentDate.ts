export function displayCurrentDate (): void {
    const today = new Date();
    const formatedDate = new Intl.DateTimeFormat('en-us', {
        dateStyle: 'full'
    });

    const dateHTML = document.querySelector('.date') as HTMLParagraphElement;
    dateHTML.innerText = `${formatedDate.format(today)}`;

}