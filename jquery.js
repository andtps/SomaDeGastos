$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault()
        
        const InputAluguel = parseFloat($('#aluguel').val()) || 0;
        const InputEscola = parseFloat($('#escola').val()) || 0;
        const InputCar = parseFloat($('#car').val()) || 0;
        const InputAgua = parseFloat($('#agua').val()) || 0;
        const InputEnergia = parseFloat($('#energia').val()) || 0;
        const InputMercado = parseFloat($('#mercado').val()) || 0;

        
        function soma() {
            let SomaInput = InputAgua + InputAluguel + InputCar + InputEscola + InputEnergia + InputMercado;
            return SomaInput;
        }

        total = soma();
        
        console.log(total);

    })

});

