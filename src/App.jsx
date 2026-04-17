import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Dashboard from './Pages/Admin/Dashboard'
import ManageTask from './Pages/Admin/ManageTask'
import ManageUsers from './Pages/Admin/ManageUsers'
import CreateTask from './Pages/Admin/CreateTask'
import PrivateRoute from './Routes/PrivateRoute'
import UserDashboard from './Pages/User/UserDashboard'
import MyTask from './Pages/User/MyTask'
import TaskDetails from './Pages/User/TaskDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/*Admin Routes*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
         
       {/*Auth Routes*/}
       <Route element={<PrivateRoute allowedRoles={[admin]} />}>
       <Route path="/admin/dashboard" element={<Dashboard />} />
       <Route path="/admin/ManageTasks" element={<ManageTasks />} />
       <Route path="/admin/ManageUsers" element={<ManageUsers />} />
       <Route path="/admin/CreateTask" element={<CreateTask />} />
       </Route>
       {/*User Routes*/}
       <Route element= {<PrivateRoute allowedRoles={["user"]}/>}/>
        <Route path="/user/dashbord" element={<UserDashboard />}/>
        <Route path="/user/my-tasks" element={<MyTask />}/>
        <Route path="/user/task-details/:id" element={<TaskDetails />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
