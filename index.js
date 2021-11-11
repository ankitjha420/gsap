console.log("it works")

const timeline = gsap.timeline({paused: true})

timeline.fromTo(["#big", ".small"], {
    opacity: "0%",
    y: -50
}, 
{duration: 1,
opacity: "100%",
duration: 2,
delay: 1,
ease: "ease-out"})

.to(".shape", {duration: 3,
               rotation: 360,
               repeat: -1,
               ease: "linear"})


/* now for the buttons functions */

const buttons = document.querySelectorAll("button")

const playButton = buttons[0]
playButton.addEventListener("click", () => {
    timeline.play()
})

const pauseButton = buttons[1]
pauseButton.addEventListener("click", () => {
    timeline.pause()
})

const resumeButton = buttons[2]
resumeButton.addEventListener("click", () => {
    timeline.resume()
})