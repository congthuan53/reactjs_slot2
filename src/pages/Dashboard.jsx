import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <section>
      <div className="page-title">
        <span className="eyebrow">NESTED ROUTES</span>
        <h1>Dashboard</h1>
        <p>Component cha luôn hiển thị. Nội dung route con xuất hiện bên trong <code>Outlet</code>.</p>
      </div>

      <div className="dashboard-layout">
        <aside className="dashboard-nav">
          <strong>Route con</strong>
          <NavLink to="/dashboard" end>Tổng quan</NavLink>
          <NavLink to="notes">Ghi chú</NavLink>
          <NavLink to="tasks">Việc cần làm</NavLink>
        </aside>

        <div className="outlet-area">
          <div className="outlet-label">&lt;Outlet /&gt;</div>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
