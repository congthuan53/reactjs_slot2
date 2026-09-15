function DashboardHome() {
  return (
    <div>
      <span className="eyebrow">INDEX ROUTE</span>
      <h2>Tổng quan buổi thuyết trình</h2>
      <p>Đây là route con mặc định khi URL khớp chính xác với <code>/dashboard</code>.</p>
      <div className="stats">
        <div><strong>22</strong><span>slides nguồn</span></div>
        <div><strong>08</strong><span>phút demo</span></div>
        <div><strong>01</strong><span>ý chính: URL mang dữ liệu</span></div>
      </div>
    </div>
  )
}

export default DashboardHome
