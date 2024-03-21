import AddButton from '../../components/AddButton'
import Sidebar from '../../containers/Sidebar'
import TaskList from '../../containers/TaskList'

function Home() {
  return (
    <>
      <Sidebar showFilters />
      <TaskList />
      <AddButton />
    </>
  )
}

export default Home
