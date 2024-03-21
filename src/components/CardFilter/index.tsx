import { useDispatch, useSelector } from 'react-redux'
import * as enums from '../../utils/enums/TaskEnum'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filterReducer'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  criterion: 'priority' | 'status' | 'allTasks'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ label, criterion, value }: Props) => {
  const { filter, tasks } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()

  const checkThisActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const countTasks = () => {
    if (criterion === 'allTasks') return tasks.itens.length
    if (criterion === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filterCriterion = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const counter = countTasks()
  const active = checkThisActive()

  return (
    <S.Card active={active} onClick={filterCriterion}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default CardFilter
