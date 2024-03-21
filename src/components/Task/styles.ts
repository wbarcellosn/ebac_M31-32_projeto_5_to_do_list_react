import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/TaskEnum'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'priority' | 'status'
}

const returnBackgroundColor = (props: TagProps): string => {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.red
    if (props.priority === enums.Priority.IMPORTANTE) return variables.orange
  } else {
    if (props.status === enums.Status.PENDENTE) return variables.yellow
    if (props.status === enums.Status.CONCLUIDA) return variables.green
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  background-color: #fcfcfc;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
  }
`
export const Title = styled.h3`
  margin-left: 8px;
  font-weight: bold;
  font-size: 18px;
`
export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
`
export const TaskDescription = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 24px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const ActionBar = styled.div`
  padding-top: 16px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
`
export const BtnCancelar = styled(Button)`
  background-color: ${variables.red};
`
