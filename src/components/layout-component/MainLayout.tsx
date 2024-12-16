import Sidebar from "../sidebar-component/Sidebar";
import './MainLayout.css'

interface LayoutProps {
  onNavigate: (section: string) => void;
  children: React.ReactNode;
}


export default function Layout({ onNavigate, children }: LayoutProps):any{
    return(
      <div className="d-flex" id="wrapper">
      <Sidebar onNavigate={onNavigate} />
      <div id="page-content-wrapper" className="flex-grow-1">
        <div className="container-fluid mt-4 global-layout app-container">{children}</div>
      </div>
    </div>

    );
};