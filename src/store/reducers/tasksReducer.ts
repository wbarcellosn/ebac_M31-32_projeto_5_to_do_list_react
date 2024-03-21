import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TaskModel from '../../models/Task'
import * as enums from '../../utils/enums/TaskEnum'

type tasksState = {
  itens: TaskModel[]
}

const initialState: tasksState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JavaScript',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum consequatur assumenda laborum, aliquid obcaecati praesentium voluptates aut nostrum rerum sed at. Aut iusto consequatur ipsam, necessitatibus unde animi doloremque.'
    },
    {
      id: 2,
      title: 'Estudar TypeScript',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum consequatur assumenda laborum, aliquid obcaecati praesentium voluptates aut nostrum rerum sed at. Aut iusto consequatur ipsam, necessitatibus unde animi doloremque.'
    },
    {
      id: 3,
      title: 'Estudar Redux',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum consequatur assumenda laborum, aliquid obcaecati praesentium voluptates aut nostrum rerum sed at. Aut iusto consequatur ipsam, necessitatibus unde animi doloremque.'
    }
  ]
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Omit<TaskModel, 'id'>>) => {
      const taskAlreadyExists = state.itens.find(
        (task) =>
          task.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      )

      if (taskAlreadyExists) {
        alert('Essa tarefa ja está cadastrada!')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    editTask: (state, action: PayloadAction<TaskModel>) => {
      const indexTask = state.itens.findIndex(
        (task) => task.id === action.payload.id
      )

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    changeState: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const indexTask = state.itens.findIndex(
        (task) => task.id === action.payload.id
      )

      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { createTask, deleteTask, editTask, changeState } =
  taskSlice.actions

export default taskSlice.reducer
