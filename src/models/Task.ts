import * as enums from '../utils/enums/TaskEnum'

class TaskModel {
  id: number
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string

  constructor(
    id: number,
    title: string,
    priority: enums.Priority,
    status: enums.Status,
    description: string
  ) {
    this.id = id
    this.title = title
    this.priority = priority
    this.status = status
    this.description = description
  }
}

export default TaskModel
