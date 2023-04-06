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
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenu}
        onClose={setMobileMenu}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 font-semibold">
              <span className="sr-only">Home</span>
              Paweł Sobaniec
            </a>
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  About
                </a>
                <a
                  href="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-8 text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
