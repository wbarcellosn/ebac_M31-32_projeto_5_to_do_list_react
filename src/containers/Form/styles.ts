import styled from 'styled-components'

export const TaskForm = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin: 0 8px 0 3px;
  }
`
export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
