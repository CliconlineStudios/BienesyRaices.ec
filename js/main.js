
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    document.getElementById("ftperfil").style.display = "block";
    conta=0;
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    conta=0;
    contador=1;
}
else{
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    conta=0;
    contador=0;
}
}

function categorias() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("habitaciones").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=2;
    
    
}

function restaurante() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=2;
    
    
}

function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=3; 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });     
        
}


function lugares() {
    document.getElementById("lugares").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=3; 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });     
        
}

//   boton foto

document.querySelector('.slider')   
.addEventListener('click',function(){
    planes();
    

});

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("ftperfil").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("habitaciones").style.display = "none";
        document.getElementById("lugares").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;

    }
    
    
    }


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
     // slider3
    
     const slider3 = document.querySelector("#slider3");
     let sliderSection3 = document.querySelectorAll(".slider__section3");
     let sliderSectionlast3 = sliderSection3[sliderSection3.length -1];
     
     const btnLeft3 = document.querySelector("#btn-left3");
     const btnRight3 = document.querySelector("#btn-rigth3");
     
     slider3.insertAdjacentElement('afterbegin', sliderSectionlast3);
     
     function next3 (){
         let sliderSectionFirst3 = document.querySelectorAll(".slider__section3")[0];
         slider3.style.marginLeft = "-200%";
         slider3.style.transition = "all 0.5s";
         setTimeout(function(){
             slider3.style.transition = "none";
             slider3.insertAdjacentElement('beforeend', sliderSectionFirst3);
             slider3.style.marginLeft = "-100%";
         }, 500);  
     }
     
     function Prev3 (){
         let sliderSection3 = document.querySelectorAll(".slider__section3");
         let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
         slider3.style.marginLeft = "0";
         slider3.style.transition = "all 0.5s";
         setTimeout(function(){
             slider3.style.transition = "none";
             slider3.insertAdjacentElement('afterbegin', sliderSectionLast3);
             slider3.style.marginLeft = "-100%";
         }, 500);  
     }
     
     btnRight3.addEventListener('click', function(){
         next3();
     });
     
     btnLeft3.addEventListener('click', function(){
         Prev3();
     });
     
     setInterval(function(){
         next3();
     },4000);  



   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        // llevar cerrar side automatico

        document.querySelector('.tarjeta').addEventListener('click',()=>{
            document.getElementById("side").style.display = "none";
            conta=0;
            });

  // slider
 
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionlast = sliderSection[sliderSection.length -1];
  
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-rigth");
  
  slider.insertAdjacentElement('afterbegin', sliderSectionlast);
  
  function next (){
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('beforeend', sliderSectionFirst);
          slider.style.marginLeft = "-100%";
      }, 500);  
  }
  
  function Prev (){
      let sliderSection = document.querySelectorAll(".slider__section");
      let sliderSectionLast = sliderSection[sliderSection.length -1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('afterbegin', sliderSectionLast);
          slider.style.marginLeft = "-100%";
      }, 500);  
  }
  
  btnRight.addEventListener('click', function(){
      next();
  });
  
  btnLeft.addEventListener('click', function(){
      Prev();
  });
  
  setInterval(function(){
      next();
  },4000);   
  

// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.side2')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        
//formulario>
        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "593994844800";
          
            let cliente = document.querySelector("#cliente").value;
            let cantidad = document.querySelector("#edad").value;
            let modulos = document.querySelector("#modulos").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                  *Bienes y Raices*%0A
                  *Datos del Contacto*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Ubicacion*%0A
                  ${cantidad}%0A
                  *Busco*%0A
                  ${modulos}%0A`;
          
            if (cliente === "" || cantidad === "" ) {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Msj Fue Enviada, ${cliente}`;
          
            window.open(url);
          });
          
    
    //ALERTAS>
          function save(){
            let url = `https://drive.google.com/u/0/uc?id=1ZNdbUhFsBIgWlGyfdwKgt5io3ty62JwE&export=download`;
            window.open(url); 
           }
          
          function ftuser() {
              Swal.fire({
                  title: 'Ximena Rom??n',
                  text: 'Asesora Bienes y Ra??ces.',
                  imageUrl: 'img/ximena.jpg',
                  imageWidth: 200,
                  confirmButtonText: 'A??adir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
          
          
          function msj2() {
            Swal.fire({
              icon: 'info',
              title: 'Traducir a Ingles',
              text: 'Opci??n Disponible Pr??ximamente',
              footer: 'Tarjeta De Presentaci??n'
            });
          
           
          }




