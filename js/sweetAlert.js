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
  
        // title:
        // text:
        // html:
        // icon:
        // confirmButtonText:
        // footer:
        // width:
        // padding:
        // background:
        // grow:
        // backdrop:
        // timer:
        // timerProgressBar:
        // toast:
        // position:
        // allowOutsideClick:
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:
    
        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	
    
        // showConfirmButton:
        // confirmButtonColor:
        // confirmButtonAriaLabel:
    
        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:
    
    
        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    
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
    title: 'Opción Disponible',
    text: 'Próximamente',
    footer: 'Tarjeta De Presentación'
  });

 
}


