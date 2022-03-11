const getQuoteButton = document.querySelector('#js-new-quote');

getQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const spinner = document.querySelector('#js-sk')

const tweeterButton = document.querySelector('#js-tweet');

async function getQuote() {
    spinner.classList.remove('hidden');
    getQuoteButton.disabled = true;

    try{
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        diplayQuote(json.message);
        tweetOut(json.message);
    } catch {
        alert('i think we have good future here voon voon!')
    }

    spinner.classList.add('hidden');
    getQuoteButton.disabled = false;

}

function diplayQuote(vv) {
    const showText = document.querySelector('#js-quote-text');
    showText.textContent = vv;
}

function tweetOut(quote) {
    tweeterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`)
}

getQuote();