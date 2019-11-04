import styled from 'styled-components'

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
  .ant-checkbox-wrapper {
    line-height: 1.5;
  }
`
