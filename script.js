$(document).on('click', '.send-bouton', function(){
    nom = $('.nom').val()
    prenom = $('.prenom').val()
    message = $('.message').val()
    email = $('.email').val()
    numero = $('.numero').val()
    service = $('.service').val()
    var formData = {"name" : nom ,"firstname": prenom, "email" : email ,"phone": numero, "service" : service ,"message": message};
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "https://cplr.oriatec-host.fr/support.php",
        data: formData,
        success: function (response) {
            console.log(response)
        }
    });
})
