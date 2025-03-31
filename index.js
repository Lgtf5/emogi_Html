const children = document.querySelectorAll('.flex-container element');

children.forEach((child) => {
    child.computedStyleMap.transition = 'all 0.5s ease';

    child.addEventListener('click', () => { 
        if (child.computedStyleMap.opacity === 0 || child.computedStyleMap.display === 'none') {
            child.computedStyleMap.display = 'block';
            setTimeout(() => {
                    child.style.opacity = '1';
                }, 10);
            } else {
                child.style.opacity = '0';
                setTimeout(() => {
                    child.style.display = 'none'; }, 300);
                }
            });
        });
        
