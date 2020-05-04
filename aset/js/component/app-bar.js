const template = document.createElement('template');
template.innerHTML = 
`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
        nav {
            position: absolute;
            box-shadow: none;
            transition: 0.5s;
        }
    </style>
    <ul class="sidenav white lighten-2" id="mobile-nav">
        <li><a href="#banner">Home</a></li>
        <li><a href="#info">Info</a></li>
        <li><a href="#data">Data</a></li>
    </ul>   
    <div class="navbar-fixed">
        <nav class="transparent">
            <div class="container">
                <div class="nav-wrapper transparent">
                    <a href="#" class="sidenav-trigger" data-target="mobile-nav">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down transparent">
                        <li><a href="#banner">Home</a></li>
                        <li><a href="#info">Info</a></li>
                        <li><a href="#data">Data</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>


    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script>

        $(document).ready(function(){
            $('.sidenav').sidenav();
            $(window).scroll(function(){
                if($(window).scrollTop()>400){
                    $('nav').removeClass('transparent');
                    $('nav').addClass('red darken-4');
                }else{
                    $('nav').removeClass('red darken-4');
                    $('nav').addClass('transparent');
                }
            });
        });    

    </script>
`


class AppBar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode : "open"});
        var self = this;

        
        this.render();
        var sidenavs = this.shadowRoot.querySelectorAll('.sidenav')
            for (var i = 0; i < sidenavs.length; i++){
                M.Sidenav.init(sidenavs[i]);
        }
    }


    render() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));        
    }

    

    connectedCallback() {

        


        // this.shadowRoot.addEventListener('DOMContentLoaded', function() {
        //     var elems = this.shadowRoot.querySelectorAll('.sidenav');
        //     var instances = M.Sidenav.init(elems, options);
        // });
        // $(document).ready(function(){
        //     $('.sidenav').shadowRoot().sidenav();
        //     $(window).scroll(function(){
        //         if($(window).scrollTop()>400){
        //             $('nav').removeClass('transparent');
        //             $('nav').addClass('red darken-4');
        //         }else{
        //             $('nav').removeClass('red darken-4');
        //             $('nav').addClass('transparent');
        //         }
        //     });
        // });    
    }

}

customElements.define('app-bar', AppBar);