import { toast } from "react-toastify";

function showNotification(type, message, position) {
  toast[type](message, {
    position: toast.POSITION[position]
  })
}

export { showNotification }