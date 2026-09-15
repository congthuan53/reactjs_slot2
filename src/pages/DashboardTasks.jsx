function DashboardTasks() {
  return (
    <div>
      <span className="eyebrow">CHILD ROUTE: TASKS</span>
      <h2>Checklist demo trên lớp</h2>
      <label className="check-row"><input type="checkbox" defaultChecked /> Mở danh sách hoa lan</label>
      <label className="check-row"><input type="checkbox" /> Bấm vào ba id khác nhau</label>
      <label className="check-row"><input type="checkbox" /> Nhập id không tồn tại trên URL</label>
      <label className="check-row"><input type="checkbox" /> Giải thích Number(id)</label>
    </div>
  )
}

export default DashboardTasks
