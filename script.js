const faders = document.querySelectorAll('.fade-in');
const shifters = document.querySelectorAll('.shifter');

const appearOptions = {
    treshold: 1
};

const appearOnScroll = new IntersectionObserver(
    function(
        entries, 
        appearOnScroll) 
        {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target)
                }
            })
        }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});

shifters.forEach(shifter => {
    appearOnScroll.observe(shifter)
})