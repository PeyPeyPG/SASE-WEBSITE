const faders = document.querySelectorAll('.fade-in');
const shifters = document.querySelectorAll('.shifter');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
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