import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";

const SpringModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-sell-primary text-white font-medium 
        px-4 py-2 rounded hover:opacity-90
        transition-all shadow-[3px_3px_0px_black]
        hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
      >
        Unlock your potential
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Modal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-sell-primary text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <BsTwitterX className="text-white/10 -rotate-12 text-[250px] absolute z-0 -top-16 -left-16" />

            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-sell-primary grid place-items-center mx-auto">
                <BsTwitterX />
              </div>

              <h3 className="text-3xl font-bold text-center mb-2">
                Do you like what you see?
              </h3>

              <p className="text-center mb-6">
                I have a lot more to show you on my Twitter account. <br />{" "}
                Consider following me for more updates.
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>

                <a
                  onClick={() => setIsOpen(false)}
                  href="https://x.com/loisglld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:opacity-90 transition-opacity text-sell-primary font-semibold w-full py-2 rounded flex items-center justify-center"
                >
                  I'm in baby
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModalButton;
