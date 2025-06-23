document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => card.classList.add('hovered'));
    card.addEventListener('mouseout', () => card.classList.remove('hovered'));
});
