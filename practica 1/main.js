
$(document).ready(()=>{
    let Settext = msg => {
        $("#lista").append('<li>' +msg +'</li>');
    }
    $("body").css("background-color","grey");
    //setTimeout(() => {
     //   Settext("No leas esto");
    //}, 3000);
    Settext("la vibora de la mar");
    Settext('');
    $.ajax({
        url: "./json/yeison.json"
    }).done(data =>{
        console.log(data);
        let alumnos = data["alumnos"]

        alumnos.forEach((v,k)=>{
            console.log(` key ${k}, value ${v}`)
            Settext(` nombre: ${v["nombre"]}`)
            Settext(` edad: ${v["edad"]}`)
            Settext(` semestre: ${v["semestre"]}`)
            Settext('');
        })
    });
})

/*let promo = new promise ((resolve,reject)=>{
    setTimeout(() => {
        reject("no ganaste ni maiz");
    }, 3000);
    let loteria
})*/