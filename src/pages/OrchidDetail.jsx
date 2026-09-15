import { Link, useNavigate, useParams } from 'react-router-dom'
import orchids from '../data/orchids'

function OrchidDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const orchid = orchids.find((item) => item.id === Number(id))

  if (!orchid) {
    return (
      <section className="empty-state large-empty">
        <span className="eyebrow">PARAM KHÔNG HỢP LỆ</span>
        <h1>Không có hoa lan với id = {id}</h1>
        <p><code>useParams()</code> vẫn đọc được id, nhưng mảng dữ liệu không có phần tử tương ứng.</p>
        <button onClick={() => navigate('/orchids')}>Quay lại danh sách</button>
      </section>
    )
  }

  return (
    <section>
      <button className="back-button" onClick={() => navigate(-1)}>← Quay lại</button>

      <div className="detail-grid">
        <div className={`detail-visual orchid-${orchid.id}`}>
          <span>{orchid.symbol}</span>
          <small>ORCHID 0{orchid.id}</small>
        </div>

        <div className="detail-content">
          <span className="eyebrow">ROUTE PARAMETER ĐANG HOẠT ĐỘNG</span>
          <h1>{orchid.name}</h1>
          <p className="latin-name">{orchid.scientificName}</p>

          <div className="param-explainer">
            <div><span>URL thực tế</span><code>/orchids/{id}</code></div>
            <div><span>Route mẫu</span><code>/orchids/:id</code></div>
            <div className="param-result"><span>Kết quả useParams()</span><code>{`{ id: "${id}" }`}</code></div>
          </div>

          <p className="description">{orchid.description}</p>

          <dl className="orchid-facts">
            <div><dt>Màu sắc</dt><dd>{orchid.color}</dd></div>
            <div><dt>Độ khó</dt><dd>{orchid.difficulty}</dd></div>
            <div><dt>Giá tham khảo</dt><dd>{orchid.price.toLocaleString('vi-VN')}đ</dd></div>
          </dl>

          <div className="care-note"><strong>Cách chăm sóc</strong><p>{orchid.care}</p></div>
        </div>
      </div>

      <div className="next-route">
        <span>Đổi param, giữ nguyên component:</span>
        {orchids.filter((item) => item.id !== orchid.id).map((item) => (
          <Link key={item.id} to={`/orchids/${item.id}`}>{item.id}</Link>
        ))}
      </div>
    </section>
  )
}

export default OrchidDetail
