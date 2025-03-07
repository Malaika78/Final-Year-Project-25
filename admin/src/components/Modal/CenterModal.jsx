import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ContentHolder, Head, StyledModal } from "./Modal.styles";
import modalCloseIcon from "../../assets//modalCloseIcon.svg";
const modalRoot = document.getElementById("modal-root");

const CenterModal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  radius,
  desktopRight,
  desktopTop,
  setIsEditing,
  title,
  subtitle,
  headImage,
  iscloseAble = true,
  noHead,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [open]);

  const handleClose = () => {
    setIsEditing?.({
      status: false,
    });
    setOpen(false);
  };
  return ReactDOM.createPortal(
    open && (
      <StyledModal
        ref={modalRef}
        open={open}
        // onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleClose();
          }
        }}
      >
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {noHead ? (
            <></>
          ) : (
            <Head>
              {title && (
                <strong className="title">
                  {title} <span className="subtitle">{subtitle}</span>
                </strong>
              )}
              {headImage && <img src={headImage} alt="Icon" />}
              {iscloseAble && (
                <button
                  type="button"
                  className="closer"
                  onClick={handleClose}
                  tabIndex={0}
                >
                  <img src={modalCloseIcon} alt="modalCloseIcon" />
                </button>
              )}
            </Head>
          )}
          {children}
        </ContentHolder>
      </StyledModal>
    ),
    modalRoot
  );
};

export default CenterModal;
