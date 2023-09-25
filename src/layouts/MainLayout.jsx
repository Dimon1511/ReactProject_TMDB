import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <div>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
