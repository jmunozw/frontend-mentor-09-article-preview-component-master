const shareButton = document.querySelector('.card-share');
const sharePanel = document.querySelector('#share-panel');

if(shareButton && sharePanel){
    shareButton.addEventListener('click', () =>{
        const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';

        // Cambiar aria-expanded
        shareButton.setAttribute('aria-expanded', String(!isExpanded));

        // Mostrar / ocultar panel
        if(!isExpanded){
            sharePanel.classList.add('is-visible');
        }else{
            sharePanel.classList.remove('is-visible');
        }

        // Escuchar click fuera del panel para cerrarlo
        function handleClickOutside(e){
            const clickedOutsidePanel = !sharePanel.contains(e.target);
            const clickedOutsideButton = !shareButton.contains(e.target);

            if(clickedOutsidePanel && clickedOutsideButton){
                sharePanel.classList.remove('is-visible');
                shareButton.setAttribute('aria-expanded', 'false');
                document.removeEventListener('click', handleClickOutside);
            }
        }

        if(!isExpanded){
            //Si lo estamos abriendo -> Empezar a escuchar clicks fuera
            document.addEventListener('click', handleClickOutside);
        } else{
            document.removeEventListener('click', handleClickOutside);
        }


        // Escuchar el boton Escape para cerrar el panel
        function handleEscape(event){
            if(event.key === 'Escape'){
                sharePanel.classList.remove('is-visible');
                shareButton.setAttribute('aria-expanded','false');

                // Dejamos de escuchar la tecla Escape
                document.removeEventListener('keydown', handleEscape);
            }
        }

        if(!isExpanded){
            // El panel se esta abriendo
            document.addEventListener('keydown', handleEscape);
        }else{
            //El panel se esta cerrando
            document.removeEventListener('keydown', handleEscape);
        }
    });
}


