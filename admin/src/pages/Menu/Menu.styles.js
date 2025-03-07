import styled from "styled-components";

export const StyledMenuPage = styled.div`
  padding: 30px 50px;
  width: 100%;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button,
  .btn {
    min-width: 100px;
    background: gray;
    padding: 5px 10px;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .list-table-format-menus {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FormWarpper = styled.form`
  input,
  textarea {
    width: 100%;
    padding: 10px;
  }
  textarea {
    resize: none;
  }
`;
export const MenuListWarpper = styled.div`
  margin-top: 30px;
  button,
  .btn {
    max-width: 100px;
    width: 100%;
    background: gray;
    padding: 5px 10px;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
  }
`;
export const MenuList = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
