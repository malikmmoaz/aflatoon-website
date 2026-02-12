import React from "react";
import Image from "next/image";

const WhatsAppMockup = () => {
  return (
    <div className="relative">
      <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl overflow-hidden ring-4 ring-primary/5">
        <div className="absolute top-0 w-full h-16 bg-[#075e54] flex items-center px-4 pt-4 text-white z-10">
          <div className="w-8 h-8 rounded-full bg-gray-400 mr-2 flex items-center justify-center overflow-hidden">
            <Image src="/logo_square.png" alt="Aflatoon AI avatar" width={32} height={32} />
          </div>
          <div>
            <div className="text-xs font-bold leading-tight">Aflatoon AI</div>
            <div className="text-[10px] opacity-80">online</div>
          </div>
        </div>
        <div className="h-full pt-16 pb-16 bg-[#e5ddd5] dark:bg-[#0b141a] overflow-y-auto px-3 flex flex-col gap-4">
          <div className="mt-4 flex justify-end">
            {/*<div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-gray-900 dark:text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-300">
                  play_arrow
                </span>
                <div className="flex flex-col gap-0.5">
                  <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full">
                    <div className="w-[60%] h-full bg-[#34b7f1] rounded-full"></div>
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-300">
                    0:08
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-right mt-1 opacity-70">
                12:45 PM
              </div>
            </div>*/}
          </div>
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
              <p className="text-sm">2 Large Pepporini. Same address.</p>
              <div className="text-[10px] text-right mt-1 opacity-70">
                12:45 PM
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-gray-900 dark:text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm">2 Large Pepporini @ 300</p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm font-bold">Confirm Address:</p>
                  <p className="text-sm">
                    House 123, Street 45, Bahria Enclave
                  </p>
                </div>
              </div>
              <div className="text-[10px] text-right opacity-70">12:45 PM</div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
              <p className="text-sm">Confirm!</p>
              <div className="text-[10px] text-right mt-1 opacity-70">
                12:45 PM
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-gray-900 dark:text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm">
                    Thank you for your order. Rider will be in touch shortly.
                  </p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm"></p>
                  <p className="text-sm font-thin italic">
                    powered by © aflatoon.ai
                  </p>
                </div>
              </div>
              <div className="text-[10px] text-right mt-1 opacity-70">
                12:45 PM
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-white dark:bg-[#202c33] flex items-center px-4 gap-2 z-10">
          <div className="flex-grow bg-gray-100 dark:bg-[#2a3942] rounded-full px-4 py-2 text-sm text-gray-400">
            Type message...
          </div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black cursor-pointer">
            <a
              href="https://wa.me/923239856439?text=I%20would%20like%20to%20learn%20more%20about%20Aflatoon%20AI%21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send us a message on WhatsApp"
            >
              <span className="material-symbols-outlined">send</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default WhatsAppMockup;
