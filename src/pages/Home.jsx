import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">CHAPTER 06</span>
          <h1>Handling Navigation with Routes</h1>
          <p>
            Một project nhỏ để nhìn thấy URL, component và dữ liệu thay đổi cùng nhau.
            Phần trọng tâm là route parameter với đường dẫn <code>/orchids/:id</code>.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/orchids">Demo route parameter</Link>
            <Link className="button secondary" to="/dashboard">Xem nested routes</Link>
          </div>
        </div>

        <div className="route-map" aria-label="Route mapping diagram">
          <span>URL</span>
          <div className="map-line"></div>
          <span>Route</span>
          <div className="map-line"></div>
          <span>Component</span>
          <strong>/orchids/3</strong>
          <strong>/orchids/:id</strong>
          <strong>OrchidDetail</strong>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <span className="eyebrow">NỘI DUNG CHƯƠNG</span>
          <h2>Mỗi khái niệm đều có chỗ để demo</h2>
        </div>
        <span className="chapter-count">06 chủ đề</span>
      </div>

      <div className="topic-list">
        <article><span>01</span><h3>Router</h3><p><code>BrowserRouter</code> bao quanh ứng dụng và theo dõi lịch sử trình duyệt.</p></article>
        <article className="featured-topic"><span>02</span><h3>Route parameter</h3><p><code>:id</code> biến một route thành nhiều trang chi tiết khác nhau.</p></article>
        <article><span>03</span><h3>Navigation</h3><p><code>Link</code> và <code>NavLink</code> chuyển trang mà không tải lại toàn bộ app.</p></article>
        <article><span>04</span><h3>Nested route</h3><p>Route con hiển thị bên trong component cha tại vị trí <code>Outlet</code>.</p></article>
        <article><span>05</span><h3>Router hooks</h3><p>Đọc URL và điều hướng bằng các hook đơn giản của React Router.</p></article>
        <article><span>06</span><h3>Client side</h3><p>Trình duyệt đổi view nhanh, còn server không cần gửi lại cả trang HTML.</p></article>
      </div>
    </section>
  )
}

export default Home
