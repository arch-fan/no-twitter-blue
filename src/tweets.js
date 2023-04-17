function delTweet() {
    const tweetElements = document.querySelectorAll('[data-testid="tweet"]')

    tweetElements.forEach((value) => {
        blu = value.outerHTML.indexOf("M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897")

        if (blu != -1) {
            value.outerHTML = ""
        }
    })
}

document.addEventListener('scroll', () => {
    delTweet()
})