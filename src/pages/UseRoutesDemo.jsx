import { Link, useRoutes } from 'react-router-dom'

function MiniHome() {
  return <p>Mini home được render bởi object có <code>path: "/"</code>.</p>
}

function MiniAbout() {
  return <p>Mini about được render bởi object có <code>path: "about"</code>.</p>
}

function UseRoutesDemo() {
  const element = useRoutes([
    { index: true, element: <MiniHome /> },
    { path: 'about', element: <MiniAbout /> },
  ])

  return (
    <section className="mini-demo">
      <span className="eyebrow">USE ROUTES DEMO</span>
      <h1>Route khai báo bằng object</h1>
      <div className="mini-nav">
        <Link to="/mini">Mini home</Link>
        <Link to="/mini/about">Mini about</Link>
      </div>
      <div className="mini-result">{element}</div>
    </section>
  )
}

export default UseRoutesDemo
