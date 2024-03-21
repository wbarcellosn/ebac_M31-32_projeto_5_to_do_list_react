import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import * as SG from '../../styles/'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filterReducer'
import * as enums from '../../utils/enums/TaskEnum'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const { term } = useSelector((state: RootReducer) => state.filter)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <SG.Input
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.PENDENTE}
                criterion="status"
                label="Pendente"
              />
              <CardFilter
                value={enums.Status.CONCLUIDA}
                criterion="status"
                label="Concluídas"
              />
              <CardFilter
                value={enums.Priority.URGENTE}
                criterion="priority"
                label="Urgentes"
              />
              <CardFilter
                value={enums.Priority.IMPORTANTE}
                criterion="priority"
                label="Importantes"
              />
              <CardFilter
                value={enums.Priority.NORMAL}
                criterion="priority"
                label="Normal"
              />
              <CardFilter criterion="allTasks" label="Todas" />
            </S.Filters>
          </>
        ) : (
          <SG.Button onClick={() => navigate('/')}>Voltar</SG.Button>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
