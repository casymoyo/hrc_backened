document.addEventListener(
    'DOMContentLoaded', function(){

        window.onscroll = () => {
            if(window.innerHeight + window.scrollY == document.body.offsetHeight){
                document.querySelector('.social-media').style.display = 'none'
            }
        }


        // navbar drop down 
        let dropBtn =  document.querySelector('.bi-list')
        dropBtn.addEventListener(
            'click', function(){
                console.log('working')
                let dropData = document.querySelector('.drop-down-data')
                if(!dropData.classList.contains('show')){
                    dropData.classList.add('show')
                    overlay.classList.remove("hidden")
                }
                else{
                    dropData.classList.remove('show')
                    overlay.classList.add("hidden")
                }
            }
        )
        
        // product menu 
        let cardParent = document.querySelector('.products-page')
        cardParent.querySelectorAll('.card').forEach(card => {
            card.onclick = function(){
                let products = document.querySelector('.products-page')
                products.querySelector('.content').style.display = 'none'
                show(this.dataset.page)
            }
        })
        function show(cardId) {
            document.querySelector('#soft').style.display = 'none'
            document.querySelector('#mob').style.display = 'none'
            document.querySelector('#web').style.display = 'none'
            document.querySelector('#marketing').style.display = 'none'

            try {
                document.querySelector(`#${cardId}`).style.display = 'block'
            } catch (error) {
                // return no error weird
            }
        }

        // modal variables
        const mod = document.querySelector(".mod")
        const overlay = document.querySelector(".overlay")
        // modal functionality
        document.querySelectorAll('.qoute').forEach( button => {
            button.addEventListener(
                'click', function(){
                    console.log(this.dataset.product)
                    showModal(this.dataset.product)
                }
            )
        })
        // modal show
        function showModal(product){
            mod.classList.remove("hidden")
            overlay.classList.remove("hidden")

            mod.querySelector('#qoute-message').innerHTML = `What kind of ${product} can we develop for you?`
        }
        // modal close
        document.querySelector('.btn-close').addEventListener(
            'click', () =>{
                mod.classList.add("hidden")
                overlay.classList.add("hidden")
            }
        )
        mod.querySelector('#qoute-message').addEventListener(
            'click', () =>{
                mod.querySelector('#qoute-message').innerHTML = ''
            }
        )
        // footer date
        const d = document.getElementById('date')
        let ft = new Date()
        d.innerHTML = ft.getFullYear();
    }
)
// daashboard

document.querySelector('.navigation-responsive').addEventListener(
    'click', ()=>{
        let res = document.querySelector('.responsive')
        if(!res.classList.contains('responsive-show')){
            res.classList.add('responsive-show')
        }else{
            res.classList.remove('responsive-show')
        }
    }
)


