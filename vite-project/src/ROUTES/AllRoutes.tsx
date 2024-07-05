import {Routes, Route} from 'react-router-dom'
import UserForm from '../components/UserForm';
import MainData from '../pages/MainData';
 
//Defining the route paths
const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element={<UserForm/>}></Route>
            <Route path="/data" element={<MainData/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes;