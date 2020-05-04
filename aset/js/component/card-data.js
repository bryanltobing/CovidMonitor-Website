const template = document.createElement('template');
template.innerHTML = 
`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <style>

    /* Indonesian Case */
    .indonesia-data .card-panel {
        border-radius: 5px;
        box-shadow: 5px 10px burlywood;
        
    }

    .indonesia-data .card-panel h5{
        font-family: 'Baloo Paaji 2', cursive;
    }

    .indonesia-data .card-panel h6{
        font-weight: bold;
    }

    .indonesia-data .card-panel p{
        border-radius: 100px;
        color: white;
    }
    .one {
        background-color: orange;
    }
    .two {
        background-color: green;
    }
    .three {
        background-color: red;
    }
    .four {
        background-color: blue;
    }
    
    
    .cOne {
        border: 1px solid orange;
    }
    
    .cTwo {
        border : 1px solid green;
    }
    
    .cThree {
        border: 1px solid red;
    }
    
    .cFour {
        border: 1px solid blue;
    }
    
    .cOne:hover{
        box-shadow: 0px 0px 5px 5px burlywood;
        border: 1px tomato solid;
    }
    
    .cTwo:hover{
        box-shadow: 0px 0px 5px 5px #109618;
        border: 1px green;
    }
    
    .cThree:hover{
        box-shadow: 0px 0px 5px 5px #dc3912;
        border: 1px red;
    }
    
    .cFour:hover{
        box-shadow: 0px 0px 5px 5px #3366cc;
        border: 1px blue;
    }

    

    </style>
    <div class="indonesia-data">
    
            
                <div class="card-panel whitesmoke hoverable cOne">
                    <h5 class="orange-text text-darken-2"></h5>
                    <h6 class=""><slot name="case"/></h6>
                    <p class="one"><slot name="newcase"/></p>
                </div>
            
        
    </div>
`

class CardData extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({mode : "open"});
        this.render();

    }

    render() {

        this.shadowRoot.appendChild(template.content.cloneNode(true)); 
        this.shadowRoot.querySelector('h5').innerText = this.getAttribute('title');

        const test = this.getAttribute('title');
        console.log(test);
        if(test == 'Recovered') {
            this.shadowRoot.querySelector('h5').classList.remove('orange-text');
            this.shadowRoot.querySelector('h5').classList.add('green-text');
            this.shadowRoot.querySelector('p').classList.remove('one');
            this.shadowRoot.querySelector('p').classList.add('two');
            this.shadowRoot.querySelector('.hoverable').classList.remove('cOne');
            this.shadowRoot.querySelector('.hoverable').classList.add('cTwo');
        } else if(test == 'Deaths') {
            this.shadowRoot.querySelector('h5').classList.remove('orange-text');
            this.shadowRoot.querySelector('h5').classList.add('red-text');
            this.shadowRoot.querySelector('p').classList.remove('one');
            this.shadowRoot.querySelector('p').classList.add('three');
            this.shadowRoot.querySelector('.hoverable').classList.remove('cOne');
            this.shadowRoot.querySelector('.hoverable').classList.add('cThree');
        } else if(test == 'Active Case') {
            this.shadowRoot.querySelector('h5').classList.remove('orange-text');
            this.shadowRoot.querySelector('h5').classList.add('blue-text');
            this.shadowRoot.querySelector('p').classList.remove('one');
            this.shadowRoot.querySelector('p').classList.add('four');
            this.shadowRoot.querySelector('.hoverable').classList.remove('cOne');
            this.shadowRoot.querySelector('.hoverable').classList.add('cFour');
        }

    }

}

customElements.define('card-data', CardData);

