import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

function HooksDemo() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const mode = searchParams.get('mode') || 'basic'

  return (
    <section>
      <div className="page-title">
        <span className="eyebrow">ROUTER HOOKS</span>
        <h1>Quan sát URL bằng code</h1>
        <p>Trang này gom các hook trong slide vào một ví dụ ngắn, dễ mở và giải thích.</p>
      </div>

      <div className="hook-grid">
        <article>
          <code>useLocation()</code>
          <h2>Vị trí hiện tại</h2>
          <pre>{JSON.stringify(location, null, 2)}</pre>
        </article>

        <article>
          <code>useSearchParams()</code>
          <h2>Chế độ: {mode}</h2>
          <div className="segment-control">
            <button className={mode === 'basic' ? 'selected' : ''} onClick={() => setSearchParams({ mode: 'basic' })}>Basic</button>
            <button className={mode === 'focus' ? 'selected' : ''} onClick={() => setSearchParams({ mode: 'focus' })}>Focus</button>
          </div>
          <p>Nhấn nút và quan sát phần <code>?mode=...</code> trên URL.</p>
        </article>

        <article>
          <code>useNavigate()</code>
          <h2>Điều hướng bằng hàm</h2>
          <p>Phù hợp sau khi submit form, đăng nhập hoặc xử lý xong một hành động.</p>
          <button className="text-button" onClick={() => navigate('/orchids/1')}>Mở orchid id = 1</button>
        </article>

        <article>
          <code>useRoutes()</code>
          <h2>Routes bằng JavaScript object</h2>
          <p>Cùng mục đích với <code>Routes</code>, nhưng cấu hình route nằm trong một mảng object.</p>
          <Link className="text-button inline-button" to="/mini">Mở mini demo</Link>
        </article>
      </div>
    </section>
  )
}

export default HooksDemo
