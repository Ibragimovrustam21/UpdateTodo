import { Route, Routes } from "react-router-dom";
import { Layout } from './layout/Layout'
import { AddMember } from "./pages/AddMember";
import { Home } from "./pages/Home";


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='add-member' element={<AddMember />} />
      </Route>
    </Routes>
  );
}
