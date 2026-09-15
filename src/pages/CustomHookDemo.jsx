import { useState } from 'react'
import StudyCounter from '../components/StudyCounter'
import useDocumentTitle from '../hooks/useDocumentTitle'

const titleIdeas = ['Custom Hook', 'useState', 'useEffect', 'React Router']

function CustomHookDemo() {
  const [topic, setTopic] = useState('Custom Hook')
  const safeTopic = topic.trim() || 'React'

  useDocumentTitle(`Đang học: ${safeTopic} 🌱`)

  return (
    <section className="custom-hook-page">
      <div className="custom-hook-hero">
        <div className="custom-hook-intro">
          <span className="eyebrow">CHAPTER 05 · CUSTOM HOOK</span>
          <h1>Biến logic thành “đồ nghề” dùng lại</h1>
          <p>
            Custom Hook là một hàm bắt đầu bằng <code>use</code>. Nó gom logic có sử dụng
            Hook để nhiều component có thể dùng lại mà vẫn dễ đọc.
          </p>
          <div className="hook-formula" aria-label="Công thức của custom hook">
            <span>Logic lặp lại</span>
            <b>+</b>
            <span>Hook của React</span>
            <b>=</b>
            <strong>Custom Hook</strong>
          </div>
        </div>

        <aside className="hook-anatomy">
          <span className="anatomy-label">NHẬN DIỆN NHANH</span>
          <code>useStudyCounter()</code>
          <div className="anatomy-line">
            <span>use</span>
            <p>Tên bắt đầu bằng <strong>use</strong> để React và ESLint nhận biết đây là Hook.</p>
          </div>
          <div className="anatomy-line">
            <span>()</span>
            <p>Hàm có thể nhận dữ liệu đầu vào và trả về state cùng các hàm xử lý.</p>
          </div>
        </aside>
      </div>

      <section className="hook-lab title-lab">
        <div className="lab-copy">
          <span className="lab-number">THỬ NGHIỆM 01</span>
          <h2><code>useDocumentTitle</code> đổi tên tab</h2>
          <p>Gõ một chủ đề rồi nhìn lên tab trình duyệt. Component chỉ truyền tiêu đề, còn custom hook chịu trách nhiệm đồng bộ với <code>document.title</code>.</p>
        </div>

        <div className="title-workbench">
          <label htmlFor="study-topic">Hôm nay bạn đang học gì?</label>
          <input
            id="study-topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            placeholder="Ví dụ: useEffect"
          />
          <div className="topic-suggestions" aria-label="Chủ đề gợi ý">
            {titleIdeas.map((idea) => (
              <button type="button" key={idea} onClick={() => setTopic(idea)}>{idea}</button>
            ))}
          </div>
          <div className="browser-tab-preview">
            <span className="tab-leaf" aria-hidden="true">●</span>
            <strong>Đang học: {safeTopic} 🌱</strong>
            <span aria-hidden="true">×</span>
          </div>
        </div>
      </section>

      <section className="hook-lab reuse-lab">
        <div className="lab-copy">
          <span className="lab-number">THỬ NGHIỆM 02</span>
          <h2>Một hook, hai state độc lập</h2>
          <p>Hai thẻ bên dưới cùng gọi <code>useStudyCounter()</code>. Hãy tăng điểm một bên và quan sát: chúng dùng chung logic, nhưng không dùng chung state.</p>
        </div>

        <div className="counter-grid">
          <StudyCounter name="Đội Lá Xanh" emoji="🌿" initialValue={1} color="#1d5b43" />
          <StudyCounter name="Đội Hoa Tím" emoji="🌸" initialValue={3} color="#77599b" />
        </div>
      </section>

      <section className="hook-code-story">
        <div>
          <span className="lab-number">BÊN TRONG HOOK</span>
          <h2>Logic được đóng gói</h2>
          <pre>{`function useStudyCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increase = () =>
    setCount(current => current + 1)

  return { count, increase }
}`}</pre>
        </div>

        <div>
          <span className="lab-number">TRONG COMPONENT</span>
          <h2>Cách dùng rất ngắn</h2>
          <pre>{`const { count, increase } =
  useStudyCounter(1)

return (
  <button onClick={increase}>
    Điểm: {count}
  </button>
)`}</pre>
        </div>
      </section>

      <section className="hook-rules">
        <div>
          <span className="rules-icon" aria-hidden="true">01</span>
          <p>Tên custom hook bắt đầu bằng <code>use</code>.</p>
        </div>
        <div>
          <span className="rules-icon" aria-hidden="true">02</span>
          <p>Chỉ gọi Hook ở cấp cao nhất của component hoặc custom hook.</p>
        </div>
        <div>
          <span className="rules-icon" aria-hidden="true">03</span>
          <p>Custom hook chia sẻ logic. Mỗi lần gọi vẫn có state riêng.</p>
        </div>
      </section>
    </section>
  )
}

export default CustomHookDemo
