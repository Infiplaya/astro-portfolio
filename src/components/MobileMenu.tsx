import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function MobileMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="group -m-2.5 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-200 p-1.5 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-500"
          onClick={() => setMobileMenu(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            className="h-6 w-6 text-gray-600 group-hover:text-gray-700 dark:text-gray-500 dark:group-hover:text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
      <Transition appear show={mobileMenu} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenu}
          onClose={setMobileMenu}
        >
          <div className="fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md border border-gray-300 bg-gray-200 p-1.5 text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200  dark:hover:border-gray-500"
                  onClick={() => setMobileMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-gray-700 dark:text-gray-500 dark:group-hover:text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-500/10">
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 dark:text-gray-200"
                  >
                    About
                  </a>
                  <a
                    href="/projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-8 text-gray-800 dark:text-gray-200"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
