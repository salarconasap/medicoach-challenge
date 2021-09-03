import Swal from "sweetalert2";

export const success = (title = 'Your work has been saved') => Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 1500
 })

 export const error = (text='Something went wrong!') => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: text
  })