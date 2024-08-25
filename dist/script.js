"use strict";
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const contentUrl = card.dataset.content;
        if (contentUrl) {
            //redirect to new page
            window.location.href = contentUrl;
        }
    });
});
