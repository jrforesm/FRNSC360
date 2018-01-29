
document.querySelector('a-scene').addEventListener('click', (e) => {
    if (typeof e.detail.target !== 'undefined') {
        if (typeof e.detail.target.nodeName !== 'undefined') {
            console.log(e)
            const classes = e.detail.target.getAttribute('class').split(' ');
            if (classes.includes('hotspot')) {
                const id = e.detail.target.id;
                console.log(`You clicked the ${id} hotspot.`)
            }
        }
    }
});