import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import * as SG from '../../styles'
import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = itens

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) =>
          item.title.toLocaleLowerCase().search(term.toLocaleLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return itens
    }
  }

  const displaysResultFiltering = (lenght: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''
    if (criterion === 'allTasks') {
      message = `${lenght} tarefa(s) marcada(s) como: todas`
    } else {
      message = `${lenght} tarefa(s) marcada(s) como: ${value} ${complement}`
    }

    return message
  }

  const tasks = filterTasks()
  const messageDisplayed = displaysResultFiltering(tasks.length)

  return (
    <SG.MainContainer>
      <SG.Title as="p">{messageDisplayed}</SG.Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              title={t.title}
              priority={t.priority}
              status={t.status}
              description={t.description}
            />
          </li>
        ))}
      </ul>
    </SG.MainContainer>
  )
}

export default TaskList
