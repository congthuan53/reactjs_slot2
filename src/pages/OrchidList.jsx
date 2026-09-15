import { Link, useSearchParams } from 'react-router-dom'
import orchids from '../data/orchids'

function OrchidList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''

  const filteredOrchids = orchids.filter((orchid) =>
    orchid.name.toLowerCase().includes(keyword.toLowerCase()),
  )

  function handleSearch(event) {
    const value = event.target.value

    if (value) {
      setSearchParams({ q: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <section>
      <div className="page-title two-columns">
        <div>
          <span className="eyebrow">PHẦN TRỌNG TÂM</span>
          <h1>Route Parameters</h1>
          <p>Một route động hiển thị đúng dữ liệu dựa trên giá trị nằm trong URL.</p>
        </div>

        <div className="code-note">
          <span>Route được khai báo</span>
          <code>{'<Route path="/orchids/:id" />'}</code>
        </div>
      </div>

      <div className="demo-toolbar">
        <label htmlFor="search">Tìm theo tên</label>
        <input id="search" value={keyword} onChange={handleSearch} placeholder="Ví dụ: hồ điệp" />
        <span><code>?q={keyword || '...'}</code> là search parameter</span>
      </div>

      <div className="orchid-grid">
        {filteredOrchids.map((orchid) => (
          <article className="orchid-card" key={orchid.id}>
            <div className={`orchid-visual orchid-${orchid.id}`}>
              <span>{orchid.symbol}</span>
              <small>0{orchid.id}</small>
            </div>
            <div className="orchid-content">
              <span className="difficulty">{orchid.difficulty}</span>
              <h2>{orchid.name}</h2>
              <p>{orchid.scientificName}</p>
              <div className="card-footer">
                <strong>{orchid.price.toLocaleString('vi-VN')}đ</strong>
                <Link to={`/orchids/${orchid.id}`}>Chi tiết <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredOrchids.length === 0 && (
        <div className="empty-state">
          <h2>Không tìm thấy hoa lan</h2>
          <button onClick={() => setSearchParams({})}>Xóa từ khóa</button>
        </div>
      )}
    </section>
  )
}

export default OrchidList
