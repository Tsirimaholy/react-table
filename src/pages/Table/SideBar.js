import { SideBarFooter } from "../../Component/SideBar/SideBarFooter";
import { SideBarLink } from '../../Component/SideBar/SideBarLink';
import { CollapsableNav } from '../../Component/CollapsableNav';
import { NavLink } from '../../Component/NavLink';

export const SideBar = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <SideBarLink
              label="Dashboard"
              className="fas fa-tachometer-alt"
              href="index.html"
            ></SideBarLink>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a
              className="nav-link collapsed"
              href="#!"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Layouts
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <CollapsableNav id="collapseLayouts">
              <NavLink
                label="Static Navigation"
                href="layout-static.html"
              ></NavLink>
              <NavLink
                label="Light SideNav"
                href="layout-sidenav-light.html"
              ></NavLink>
            </CollapsableNav>
            <a
              className="nav-link collapsed"
              href="#!"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Pages
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>

                <CollapsableNav id="pagesCollapseAuth">
                  <NavLink label="Login" href="login.html"></NavLink>
                  <NavLink label="Register" href="register.html"></NavLink>
                  <NavLink
                    label="Forgot Password"
                    href="password.html"
                  ></NavLink>
                </CollapsableNav>
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <CollapsableNav id="pagesCollapseError">
                  <NavLink label="401 Page" href="401.html"></NavLink>
                  <NavLink label="404 Page" href="404.html"></NavLink>
                  <NavLink label="500 Page" href="500.html"></NavLink>
                </CollapsableNav>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <SideBarLink
              label="Charts"
              className="fas fa-chart-area"
              href="charts.html"
            ></SideBarLink>
            <SideBarLink
              label="Tables"
              className="fas fa-table"
              href="tables.html"
            ></SideBarLink>
          </div>
        </div>
        <SideBarFooter
          smallLabel="Logged in as:"
          bigLabel="Start Bootstrap"
        ></SideBarFooter>
      </nav>
    </div>
  );
};
