class App {
    constructor() {
        this.$form = document.querySelector('form')
        this.$currentWord = document.querySelector('#current-word')
        this.$clearBtn = document.querySelector('#clear-btn')
        this.$canvas = document.querySelector('#canvas')
        this.$img = document.querySelector('img')
        this.$imgContainer = document.querySelector('.img-container')
        this.$returnBtn = document.querySelector('#return-btn')

        this.applyEventListners()
    }

    applyEventListners() {
        this.$form.addEventListener('submit', (event) => {
            event.preventDefault()
            this.$currentWord.blur()
            this.drawCanvas()
            this.saveImage()
        })

        this.$clearBtn.addEventListener('click', (event) => {
            this.$currentWord.value = ''
        })

        this.$returnBtn.addEventListener('click', (event) => {
            this.$imgContainer.style.display = 'none'
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
        this.$img.src = imgUrl
        this.$imgContainer.style.display = 'block'
        this.$returnBtn.style.top = this.$canvas.height / 3
    }
}

new App()