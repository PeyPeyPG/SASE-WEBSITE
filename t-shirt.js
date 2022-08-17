const buttons = document.querySelectorAll('.shop-button-div');
const current = ""

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const buttonClicked = new IntersectionObserver(
    function(
        entries) 
        {
            entries.forEach(entry => {
                if (entry.target.classList.contains('selected')){
                    current = entry.target.id
                    console.log(current)
                    if (entry.target.id != current){
                        entry.target.classList.remove('selected');
                        var newButton = document.getElementById(current.toString);
                        newButton.classList.add('selected');
                    }
                }
            })
        }, appearOptions);

buttons.forEach(button => {
    buttonClicked.observe(button)
});
