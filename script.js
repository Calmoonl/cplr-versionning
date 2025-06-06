tl = gsap.timeline()

$(document).on('click', '.send-bouton', function(){
    nom = $('.nom').val()
    prenom = $('.prenom').val()
    message = $('.message').val()
    email = $('.email').val()
    numero = $('.numero').val()
    service = $('.service').val()
    // if(!nom || !prenom || !message || !email || !numero || !service){
    //     alert("Veuillez remplir tous les champs.");
    //     return;
    // }

    gsap.to('body',{
        backgroundColor:"white",
        duration: 1,
        ease: "power4.in"
    })

    tl.to('.form-envoi', {
        scale: 100,
        duration: 1,
        opacity:0,
        ease: "power4.in"
    })

    tl.to('.rocket',{
        opacity : 1,
        duration : 0.1,
        ease:"ease-in-out"
    })

    tl.to('.rocket-text',{
        opacity : 1,
        duration : 0.1,
        ease:"ease-in-out"
    })

    var formData = {"name" : nom ,"firstname": prenom, "email" : email ,"phone": numero, "service" : service ,"message": message};
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "https://n8n.oriatec.fr/webhook-test/4e6f4ec0-de1f-45dd-b1d8-b24ddbd887c8", //"https://hook.eu2.make.com/4425ojroja3mmh8ytdxdbg2hvquro71l", //"https://cplr.oriatec-host.fr/support.php",
        data: formData,
        success: function (response) {  
            
        }
    });
})
