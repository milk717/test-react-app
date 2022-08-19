
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Main';
import PostData from './redux/PostData';
import Checkbox from './componentTest/Checkbox'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/redux/saga" element={<PostData/>}/>
          <Route path="/component/checkbox" element={<Checkbox/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
