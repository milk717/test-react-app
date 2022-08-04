
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Main';
import PostData from './redux/PostData';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/redux/saga" element={<PostData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
