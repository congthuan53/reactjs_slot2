import useStudyCounter from '../hooks/useStudyCounter'

function StudyCounter({ name, emoji, initialValue, color }) {
  const { count, increase, decrease, reset } = useStudyCounter(initialValue)

  return (
    <article className="study-counter" style={{ '--counter-color': color }}>
      <div className="counter-heading">
        <span className="counter-emoji" aria-hidden="true">{emoji}</span>
        <div>
          <small>MỘT COMPONENT RIÊNG</small>
          <h3>{name}</h3>
        </div>
      </div>

      <div className="counter-value">
        <strong>{count}</strong>
        <span>điểm tập trung</span>
      </div>

      <div className="counter-actions" aria-label={`Điều khiển điểm của ${name}`}>
        <button type="button" onClick={decrease} aria-label="Giảm một điểm">−1</button>
        <button type="button" className="counter-primary" onClick={increase}>Học xong +1</button>
        <button type="button" onClick={reset}>Làm lại</button>
      </div>
    </article>
  )
}

export default StudyCounter
