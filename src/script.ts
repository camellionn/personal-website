
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const contentUrl = (card as HTMLElement).dataset.content;
        if(contentUrl) {
            //redirect to new page
            window.location.href = contentUrl;
        }
    });
});