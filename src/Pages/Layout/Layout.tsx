import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import TopButton from "../../Components/Main/TopButton";

const Layout = () => {
  return (
    <>
      <Header />
      <TopButton />
      <Outlet />;
    </>
  );
};
export default Layout;
