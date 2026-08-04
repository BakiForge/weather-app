export function displaySectionsHTML (): void {
    const weatherMainSection = document.querySelector('.current-weather') as HTMLDivElement;
    weatherMainSection.style.display = 'block';

    const detailsSection = document.querySelector('.details-grid') as HTMLElement;
    detailsSection.style.display = 'grid';
}
