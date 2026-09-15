import { useLocation } from 'react-router-dom'

function RouteInfo() {
  const location = useLocation()

  return (
    <div className="route-info">
      <span className="live-dot"></span>
      <span>URL hiện tại</span>
      <code>{location.pathname}{location.search}</code>
    </div>
  )
}

export default RouteInfo
