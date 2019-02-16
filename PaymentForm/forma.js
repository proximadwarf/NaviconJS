
    $(document).ready(function () {

        var form = new Form()
        form.onLoad()

    });
    //функция выведения итога
    function result() {
        var sum = $("#sum");
        var final = $("#final");
        var NDS = $("#NDS");
        var s = parseInt(sum.val())
        if (!isNaN(s)) {
            var v = NDS.val().substr(6, 2);
            final.val((s * (1 + v / 100)).toFixed(2))
        }
        else {
            final.val("")
        }
}

    function Form() {
        var payer = $("#typeOfPayer");
        var NDS = $("#NDS");
        var number = $("#phoneNumber");
        var INN = $("#INN");
        var FACE = $("#FACE");
        var simple = $("#simple");
        var sum = $("#sum");
        var simpleSpan = $("#simpleSpan")

        this.onLoad = function () {    

            number.mask("+7(999) 999-9999");
            

            //Включение параметров при условии, что клиент - физическое лицо
            payer.on("change", function () {
                if ($(this).val() == 1) {
                    NDS.val("НДС = 13%");
                    FACE.hide();
                    simple.hide();
                    INN.prop('required', true);
                    INN.prop('disabled', false);
                    FACE.val("");
                    FACE.prop('required', false);
                    FACE.prop('disabled', true); 
                    simpleSpan.html("");                    
                    INN.mask('999999999999')
                    if (sum.val()) {
                        result();
                    }

                }
                //Включение параметров при условии, что клиент - юридическое лицо
                else {
                    NDS.val("НДС = 17%")
                    FACE.prop('required', true);
                    FACE.prop('disabled', false);
                    simple.show();
                    FACE.show();
                    simpleSpan.html("Упрощенное налогооблажение");
                    INN.mask('9999999999')
                    if (simple.is(':checked')) {
                        INN.val("")
                        INN.prop('required', false);
                        
                        INN.prop('disabled', true);
                    }
                    if (sum.val()) {
                        result();
                    }

                }
            });

            //Выбор типа налогооблажения
            simple.change(function () {
                if (this.checked) {
                    INN.val("")
                    INN.prop('required', false);
                    INN.prop('disabled', true);
                }
                else {
                    INN.prop('required', true);
                    INN.prop('disabled', false);
                }
            });


            //Вывод итога
            sum.on("blur", function () {
                result();
            });
            
        }
    }
