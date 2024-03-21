import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  changeState,
  deleteTask,
  editTask
} from '../../store/reducers/tasksReducer'

import * as SG from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/TaskEnum'
import TaskModel from '../../models/Task'

type Props = TaskModel

const Task = ({ title, priority, status, description, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescription, setEditedtDescription] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (description.length > 0) {
      setEditedtDescription(description)
    }
  }, [description])

  function editionCanceled() {
    setIsEditing(false)
    setEditedtDescription(description)
  }

  function saveEdit() {
    dispatch(
      editTask({
        description: editedDescription,
        id,
        priority,
        status,
        title
      })
    )
    setIsEditing(false)
  }

  function changeTaskState(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeState({
        id,
        finished: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeTaskState}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.TaskDescription
        disabled={!isEditing}
        value={editedDescription}
        onChange={(e) => setEditedtDescription(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SG.BtnSalvar onClick={saveEdit}>Salvar</SG.BtnSalvar>
            <S.BtnCancelar onClick={editionCanceled}>Cancelar</S.BtnCancelar>
          </>
        ) : (
          <>
            <SG.Button onClick={() => setIsEditing(true)}>Editar</SG.Button>
            <S.BtnCancelar onClick={() => dispatch(deleteTask(id))}>
              Remover
            </S.BtnCancelar>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
