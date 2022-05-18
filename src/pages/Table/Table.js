import { NavBrand } from "../../Component/NavBar/NavBrand";
import { NavBar } from "../../Component/NavBar/NavBar";
import { SandwichButton } from "../../Component/SandwichButton";
import { SearchBar } from "../../Component/SearchBar";
import { DropDownMenu } from "../../Component/DropdownMenu";
import { SideBar } from "./SideBar";
import { SideBarContent } from "./SideBarContent";

export const Table = () => {
  return (
    <div className="sb-nav-fixed">
      <NavBar>
        <NavBrand brandLabel="Start Bootstrap"></NavBrand>
        <SandwichButton href="#" id="sidebarToggle"></SandwichButton>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <SearchBar label="Search for ..."></SearchBar>
        </form>
        <DropDownMenu
          label1="Settings"
          label2="Activity Log"
          label3="Log Out"
        ></DropDownMenu>
      </NavBar>

      <div id="layoutSidenav">
        <SideBar></SideBar>
        <SideBarContent></SideBarContent>
      </div>
    </div>
  );
};
