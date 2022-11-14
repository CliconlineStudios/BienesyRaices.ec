
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("ftperfil").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("departamentos").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("departamentos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("ftperfil").style.display = "block";
    conta=0;
    contador=0;
}


function servicios() {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    document.getElementById("departamentos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}

function proyectos() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("departamentos").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=2;
    ids1();
    
    
}

function contactanos() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("departamentos").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=2; 
    backarriba();
    ids1();    
        
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
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("departamentos").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }


    } 
   
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
   
    


   //    menu laterl 

   var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

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
                  title: 'Ximena Román',
                  text: 'Asesora Bienes y Raíces.',
                  imageUrl: 'img/ximena.jpg',
                  imageWidth: 200,
                  confirmButtonText: 'Añadir a Contactos',
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
              text: 'Opción Disponible Próximamente',
              footer: 'Tarjeta De Presentación'
            });
          
           
          }


          // share tarjeta

const shareData2 = {
    title: 'Ximena Román',
    text: 'Enviado desde Cliconline App. Tarjeta de Presentación Digital Ximena Román',
    url: 'https://bienesyraicesec.blogspot.com',
    }
  
  
   // Share must be triggered by "user activation"
     
   var urltarjeta = 'https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Tarjeta%20Digital%20aqui%20https://bienesyraicesec.blogspot.com'
    
   function sharetarjeta(){
   if (navigator.share) {
       navigator
      .share(shareData2)
      .then(() => console.log('correcto'))
      .catch(error => console.log ('error sharing',error) );
   }else {
    window.open(urltarjeta); 
   }
   } 



