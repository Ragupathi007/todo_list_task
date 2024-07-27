import { Routes, Route } from 'react-router-dom';
import { UsersForm } from './pages/UsersForm';
import CreateTodoList from './pages/CreatetodoList';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex h-screen">
      <div className=" w-64">
        <SideBar />
      </div>
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<UsersForm />} />
          <Route path="CreatetodoList" element={<CreateTodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
