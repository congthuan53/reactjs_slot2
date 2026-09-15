import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="empty-state large-empty">
      <span className="error-code">404</span>
      <h1>Route này không tồn tại</h1>
      <p>Route <code>path="*"</code> nhận mọi URL không khớp với các route phía trên.</p>
      <Link className="button primary" to="/">Về trang chủ</Link>
    </section>
  )
}

export default NotFound
