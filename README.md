# Route Garden

Project demo cho Chapter 06: Handling Navigation with Routes. Nội dung tập trung vào route parameter và `useParams`, đồng thời có ví dụ cho các phần còn lại trong chương.

## Chạy project

```bash
npm install
npm run dev
```

## Các phần demo

- `BrowserRouter`, `Routes` và `Route`
- `Link`, `NavLink` và `Navigate`
- Route parameter `/orchids/:id` và `useParams`
- Search parameter và `useSearchParams`
- Nested routes và `Outlet`
- `useLocation`, `useNavigate` và `useRoutes`
- Custom Hook với `useDocumentTitle` và `useStudyCounter`
- Route `*` cho trang 404

Mở `/custom-hook` để thử đổi tên tab trình duyệt và quan sát hai component dùng chung logic nhưng giữ state độc lập.

Kịch bản trình bày chi tiết nằm trong [PRESENTATION_GUIDE.md](./PRESENTATION_GUIDE.md).
