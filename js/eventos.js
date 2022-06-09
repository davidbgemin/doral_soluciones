function mostrarFoto(ruta) {
  Swal.fire({
      // title: '',
      // showCloseButton: true,
      showConfirmButton:false,
      // text: '',
      padding: '1em',
      imageUrl: ruta,
      imageWidth: 900,
      imageHeight: 600,
      imageAlt: '',
    })
}