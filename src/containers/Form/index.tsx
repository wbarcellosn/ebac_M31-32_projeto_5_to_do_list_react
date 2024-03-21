import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as SG from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/TaskEnum'
import { createTask } from '../../store/reducers/tasksReducer'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      createTask({
        title,
        priority,
        status: enums.Status.PENDENTE,
        description
      })
    )
    navigate('/')
  }

  return (
    <SG.MainContainer>
      <SG.Title>Nova Tarefa</SG.Title>
      <S.TaskForm onSubmit={registerTask}>
        <SG.Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <SG.Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          placeholder="Digite a sua tarefa"
        />
        <S.Options>
          <p>Prioridade:</p>
          {Object.values(enums.Priority).map((p) => (
            <S.Option key={p}>
              <input
                defaultChecked={p === enums.Priority.NORMAL}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                value={p}
                name="priority"
                type="radio"
                id={p}
              />
              <label htmlFor={p}>{p}</label>
            </S.Option>
          ))}
        </S.Options>
        <SG.BtnSalvar type="submit">Cadastrar</SG.BtnSalvar>
      </S.TaskForm>
    </SG.MainContainer>
  )
}

export default Form
