import styled from "styled-components";

export const Closer = styled.div``;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 70;
  color: var(--text-color);
`;

export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  width: ${({ width }) => (width ? "100%" : "")};
  padding: ${({ padding }) => padding ?? "25px"}; // must prop
  background: ${({ bg }) => bg ?? ""}; // must props
  border-radius: ${({ radius }) => radius ?? "30px"};
  animation: myAnim 0.3s ease;
  background: #fff;
  max-height: 100%;
  overflow-y: auto;

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Head = styled.div`
  width: 100%;
  min-height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  margin-bottom: 30px;

  .title {
    font-size: 22px;
    line-height: 26px;
    font-weight: 500;
    color: var(--dark);
    @media (min-width: 992px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  .subtitle {
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
  }
  .closer {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    background: transparent;
    border: none;
  }
  .Icon {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 500px) {
    .closer {
      width: 30px;
      height: 30px;
      /* .Icon {
        width: 20px;
        height: 20px;
      } */
    }

    .title {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
