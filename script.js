class App {
    constructor() {
        this.$form = document.querySelector('form')
        this.$currentWord = document.querySelector('#current-word')
        this.$clearBtn = document.querySelector('#clear-btn')
        this.$canvas = document.querySelector('#canvas')

        this.applyEventListners()
    }

    applyEventListners() {
        this.$form.addEventListener('submit', (event) => {
            event.preventDefault()
            console.log("Generating image")
            this.drawCanvas()
            this.saveImage()
        })

        this.$clearBtn.addEventListener('click', (event) => {
            this.$currentWord.value = ''
        })
    }

    drawCanvas() {
        this.$canvas.width = window.screen.width
        this.$canvas.height = window.screen.height

        const ctx = this.$canvas.getContext("2d");

        ctx.fillStyle = "#FEF5EF";
        ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height);

        ctx.fillStyle = "#584B53";
        ctx.textAlign = 'center'
        ctx.font = 'bold 48px serif'
        ctx.fillText(this.$currentWord.value, this.$canvas.width / 2, this.$canvas.height / 2);
    }

    saveImage() {
        const imgUrl = this.$canvas.toDataURL()
        const $a = document.createElement('a')
        $a.href = imgUrl
        $a.download = 'wod.png'
        $a.click()
    }
}

new App()