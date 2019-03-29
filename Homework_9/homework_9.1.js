function typeMessage ( message, velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        );
    container.style = `color: magenta;`;

    message.split("").reduce((prew, symb) => {
        setTimeout(()=> container.textContent += symb,(prew += velocity) * 1000);
        return prew
    },velocity)
}

typeMessage ( `Welcome to the hell`, 1 );