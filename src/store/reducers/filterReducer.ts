import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/TaskEnum'

type StateFilter = {
  term?: string
  criterion: 'priority' | 'status' | 'allTasks'
  value?: enums.Priority | enums.Status
}

const initialState: StateFilter = {
  term: '',
  criterion: 'allTasks'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<StateFilter>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions

export default filterSlice.reducer
