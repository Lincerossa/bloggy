import styled from 'styled-components'

export const Select = styled.div`
  line-height: 1;
  .css-tlfecz-indicatorContainer {
    margin-right: 1.5rem;
  }

  .css-yk16xz-control {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    width: 100%;
    height: 32px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    ${(props) => props.status === 'error'
      && `
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #f5222d;
    `};

    &:hover {
      border-color: #40a9ff;
      border-right-width: 1px !important;
      cursor: pointer;
    }
  }
`

export const Option = styled.option``
