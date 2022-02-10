function init() {
    // events 
    document.getElementById('instagram-link').onclick = e => {
        window.open('https://www.instagram.com/solanahills/')
    }
    document.getElementById('discord-link').onclick = e => {
        window.open('https://discord.gg/solanahills/')
    }
    document.getElementById('twitter-link').onclick = e => {
        window.open('https://www.twitter.com/Solanahills')
    }
    // accordion toggle
    for (let i in document.getElementsByTagName('details')) {
        var element = document.getElementsByTagName('details')[i]
        element.onclick = e => {
            toggleAccordion(e)
        }
    }

}



function toggleAccordion(e) {
    if (e.target.open) e.target.open = false
    else e.target.open = true
}



changeNavText(['Solana Hills Fan Page', 'Made with Love.', 'Mint with Love.'], 'navbar-text', ['lightblue', 'lightblue', 'lightskyblue']);

function changeNavText(words, id, colors) {
    var currentTextIndex = 0
    var textArray = ['Solana Hills Fan Page', 'Made with Love.', 'Mint with Love.']
    setInterval(() => {
        if (currentTextIndex === 2) currentTextIndex = 0;
        else currentTextIndex += 1;
        var target = document.getElementById('navbar-text')
        target.innerText = '';
        target.innerText = textArray[currentTextIndex]

    }, 10000)
}