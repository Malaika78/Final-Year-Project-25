import styled from "styled-components";
export const StyledRestuarantPage = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
  .image-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 1220px;
    width: 100%;
    border-radius: 30px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${({ $image }) => $image});
    background-size: cover;
    min-height: 400px;
    overflow: hidden;
    margin-bottom: 30px;
    color: #fff;
    padding: 25px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    img {
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 45px;
      line-height: 49px;
      font-weight: 400;
      margin-bottom: 15px;
    }
    p {
      max-width: 500px;
    }
    .total-menu {
      font-size: 16px;
    }
  }
  .menu-wraper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    .menu-col {
      font-size: 15px;
      line-height: 19px;
      font-weight: 400;
      padding: 10px 15px;
      border-radius: 20px;
      border: 1px solid #333;
      transition: 0.3s all ease-in-out;
      cursor: pointer;
      &:hover {
        background: #333;
        color: #fff;
      }
    }
  }
  .food-display-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    margin-top: 30px;
    gap: 30px;
    row-gap: 50px;
  }
`;
