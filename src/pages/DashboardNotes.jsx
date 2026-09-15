function DashboardNotes() {
  return (
    <div>
      <span className="eyebrow">CHILD ROUTE: NOTES</span>
      <h2>Ba câu cần nhớ</h2>
      <ol className="note-list">
        <li><code>:id</code> là vị trí động trong route.</li>
        <li><code>useParams()</code> lấy giá trị thật từ URL.</li>
        <li>Param luôn là chuỗi nên cần <code>Number(id)</code> khi so sánh với số.</li>
      </ol>
    </div>
  )
}

export default DashboardNotes
