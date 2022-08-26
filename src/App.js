
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Main';
import PostData from './redux/PostData';
import Checkbox from './componentTest/Checkbox'
import TextField from './redux/reduxStateChangeTest/TextField';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/redux/saga" element={<PostData/>}/>
          <Route path="/component/checkbox" element={<Checkbox/>}/>
          <Route path="/redux/textField" element={<TextField/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
