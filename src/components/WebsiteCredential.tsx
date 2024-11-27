import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import EditPopUp from "./EditPopUp";
import { deleteCredentials } from "@/util/api";
import { AnimatePresence, motion } from "framer-motion";

interface WebsiteCredentialProps {
  website: string;
  credentialusername: string;
  encryptedpassword: string;
  uniqueID: string;
}

export default function WebsiteCredential(props: WebsiteCredentialProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleedit = () => {
    setIsEdit(!isEdit);
  };

  const handledelete = async () => {
    if (deleteCount === 2) {
      const response = await deleteCredentials(props.uniqueID);
      if (response.status === 200) {
        const data = await response.data;
        if (data.error) {
          console.log("Error: ", data.error);
        } else {
          console.log("Success: ", data.success);
          window.location.reload();
        }
      }
    } else {
      setDeleteCount(deleteCount + 1);
    }
  };

  useEffect(() => {
    if (isEdit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isEdit]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    setTooltipPosition({ top: e.clientY + 5, left: e.clientX + 5 });
    setShowTooltip(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setTooltipPosition({ top: e.clientY + 5, left: e.clientX + 5 });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div className="grid grid-flow-col grid-cols-6 place-self-start pb-3 items-center">
        <span
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "none" }}
          className="self-center font-press-start col-span-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[175px]"
          id="showcontent"
        >
          {props.website}:
        </span>

            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                    className="fixed flex justify-center items-center bg-transparent bg-white rounded-full p-1 text-black font-press-start whitespace-nowrap z-50"
                    style={{
                        top: tooltipPosition.top,
                        left: tooltipPosition.left,
                        width: "auto",
                        height: "auto",
                        minWidth: "100px",
                        minHeight: "100px",
                        maxWidth: "none",
                        maxHeight: "none",
                        aspectRatio: "1 / 1",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{
                        opacity: { duration: 0.3, ease: "easeInOut" },
                        scale: { duration: 0.3, ease: "easeInOut" },
                        y: { duration: 0.3, ease: "easeInOut" },
                    }}
                    >
                        <motion.p>
                            {props.website}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>



        <div className="col-span-4 flex flex-row gap-3">
          <input
            style={{ cursor: "none" }}
            readOnly
            placeholder="Username"
            onFocus={(e) => (e.currentTarget.value = props.credentialusername)}
            onBlur={(e) => (e.currentTarget.value = "")}
            spellCheck="false"
            className="font-press-start bg-transparent text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                    focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out w-[300px]"
          />
          <input
            style={{ cursor: "none" }}
            readOnly
            placeholder="Password"
            onFocus={(e) => (e.currentTarget.value = props.encryptedpassword)}
            onBlur={(e) => (e.currentTarget.value = "")}
            spellCheck="false"
            className="font-press-start bg-transparent text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                    focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out w-[300px]"
          />
          <button
            style={{ cursor: "none" }}
            id="invis"
            className="border-white border-[3px] rounded-lg p-2 hover:scale-110 hover:bg-white hover:text-black w-10 focus:outline-none
                    focus:shadow-md focus:shadow-white transition-all duration-300 ease-in-out invis"
            onClick={toggleedit}
          >
            <FaPen className="color-change" />
          </button>
          <div className="relative">
            <button
              style={{ cursor: "none" }}
              id="invis"
              className="border-white border-[3px] rounded-lg p-2 hover:scale-110 hover:bg-white hover:text-black w-10
                        focus:outline-none focus:shadow-md focus:shadow-white transition-all duration-300 ease-in-out invis"
              onClick={handledelete}
            >
              <FaTrash className="color-change" />
            </button>

            {/* Animate the delete spans */}
            <AnimatePresence>
              {deleteCount === 1 && (
                <motion.span
                  style={{ cursor: "none" }}
                  className="font-press-start text-white absolute left-full ml-2 whitespace-nowrap top-1/4 -translate-y-1/2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Are you Sure?
                </motion.span>
              )}
              {deleteCount === 2 && (
                <motion.span
                  style={{ cursor: "none" }}
                  className="font-press-start text-white absolute left-full ml-4 whitespace-nowrap top-1/4 -translate-y-1/2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: [1, 0.5, 1, 0],
                    y: 0,
                    scale: [1, 1.1, 1, 0.8, 1],
                  }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  ERASE FOREVER??
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

        <AnimatePresence>
            {isEdit && (
                <EditPopUp
                website={props.website}
                credentialusername={props.credentialusername}
                encryptedpassword={props.encryptedpassword}
                uniqueID={props.uniqueID}
                onClose={toggleedit}
                />
            )}
        </AnimatePresence>
    </>
  );
}