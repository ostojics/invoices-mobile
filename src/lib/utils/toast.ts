import Toast, {ToastShowParams} from 'react-native-toast-message';

interface ToastProps extends ToastShowParams {}

export const toast = ({...toastProps}: ToastProps) => {
  return Toast.show({...toastProps});
};
