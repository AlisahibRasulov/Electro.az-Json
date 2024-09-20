// import React from 'react'
// import { colors } from '@mui/material';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


export const LoginAlert = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  showCloseButton: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },

  customClass: {
    container: 'alert-container',
    // popup: 'custom-toast-popup',
    // title: 'custom-toast-title',
    // icon: 'custom-toast-icon',
    // image: 'custom-toast-image',
    // content: 'custom-toast-content',
    closeButton: 'alert-close-button',
    // actions: 'custom-toast-actions',
    // confirmButton: 'custom-toast-confirm-button',
    // denyButton: 'custom-toast-deny-button',
    // cancelButton: 'custom-toast-cancel-button',
    // loader: 'custom-toast-loader',
    // footer: 'custom-toast-footer'
  }
});

export const BasketAlert = Swal.mixin({
  toast: true,
  position: "bottom-right",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  showCloseButton: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
  customClass: {
    container: 'alert-container',
    // popup: 'custom-toast-popup',
    // title: 'custom-toast-title',
    // icon: 'alert-warning-icon',
    // image: 'custom-toast-image',
    // content: 'custom-toast-content',
    closeButton: 'alert-close-button',
    // actions: 'custom-toast-actions',
    // confirmButton: 'custom-toast-confirm-button',
    // denyButton: 'custom-toast-deny-button',
    // cancelButton: 'custom-toast-cancel-button',
    // loader: 'custom-toast-loader',
    // footer: 'custom-toast-footer'
  }
});
// Toast.fire({
//   icon: "error",
//   title: "Signed in successfully"
// });


// export default Toast