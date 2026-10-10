import  { BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutusPage from './Pages/AboutusPage'
import ContactUsPage from './Pages/ContactUsPage'
import ServicesPage from './Pages/ServicesPage'
import GalleryPage from './Pages/GalleryPage'
import Booking from './Components/BookinUs'
import ScroolToTop from './ScroolToTop'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminLayout from './Admin/AdminLayout'
import Appointments from './Admin/Pages/Appointment'
import Services from './Admin/Pages/AdminServices'
import Gallery from './Admin/Pages/AdminGallery'
import Customers from './Admin/Pages/AdminCoustomer'
import Settings from './Admin/Pages/AdminSetting'
import AdminLogin from './Pages/AdminLogin'
import Adminprotected from './Admin/Pages/Adminprotected'
import AddService from './Admin/Pages/ServiceAdd'
import UpdateService from './Admin/Pages/UpdateService'

function App() {
 
  return (
    <>
      
     <BrowserRouter>
      <ScroolToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-page' element={<AboutusPage/>}/>
        <Route path='/contact-page' element={<ContactUsPage/>}/>
        <Route path='/Services-page' element={<ServicesPage/>}/>
        <Route path='/gallery-page' element={<GalleryPage/>}/>
        <Route path='/Booking-page' element={<Booking/>}/>

        <Route path='/admin' element={<Adminprotected><AdminLayout/></Adminprotected>}>
        <Route index element={<AdminDashboard/>}/>
        <Route path='appointment' element={<Appointments/>}/>
        <Route path='admin-services' element={<Services/>}/>
        <Route path="admin-gallery" element={<Gallery/>}/>
        <Route path='admin-customers' element={<Customers/>}/>
        <Route path='admin-settings' element={<Settings/>}/>
        <Route path='add-service' element={<AddService/>}/>
        <Route path='update-service/:id' element={<UpdateService/>}/>
        </Route>
        <Route path='/admin/login' element={<AdminLogin/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
