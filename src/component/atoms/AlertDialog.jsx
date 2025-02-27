import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';


// eslint-disable-next-line react/prop-types
export const AlertDialog = ({ children, open, onClose }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

// eslint-disable-next-line react/prop-types
export const AlertDialogContent = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const AlertDialogHeader = ({ children }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const AlertDialogFooter = ({ children }) => {
  return (
    <div className="flex justify-end gap-3 mt-6">
      {children}
    </div>
  );
};
