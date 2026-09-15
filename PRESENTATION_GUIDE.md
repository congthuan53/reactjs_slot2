# Kịch bản thuyết trình Chapter 06

Project dùng React Router DOM v6 và giữ code ở mức cơ bản: function component, mảng dữ liệu, `map`, `find` và các hook của React Router.

## 1. Mở đầu, khoảng 1 phút

Mở trang chủ và nói:

> Routing là quá trình ánh xạ một URL tới component cần hiển thị. Với client-side routing, trình duyệt thay đổi view mà không yêu cầu server gửi lại toàn bộ trang HTML.

Chỉ vào sơ đồ trên trang chủ:

```text
/orchids/3  ->  /orchids/:id  ->  OrchidDetail
```

Liên hệ với slide 2 đến 5:

- Mục tiêu của chương là thiết lập router và các route.
- `BrowserRouter` lưu location trong thanh địa chỉ và dùng history của trình duyệt.
- `HashRouter` phù hợp khi server không hỗ trợ mọi URL của SPA.
- `MemoryRouter` thường dùng khi test vì location nằm trong bộ nhớ.
- `StaticRouter` phục vụ render phía server. `NativeRouter` dùng với React Native.

Trong project, mở `src/main.jsx` để chỉ đoạn `BrowserRouter` bao quanh `App`.

## 2. Routes và navigation, khoảng 1 phút

Mở `src/App.jsx` và `src/components/Header.jsx`.

Nói:

> `Routes` xem URL hiện tại, tìm `Route` phù hợp nhất rồi render element của route đó. `Link` và `NavLink` tạo liên kết để chuyển trang phía client. `NavLink` biết link nào đang active nên phù hợp với menu.

Demo:

1. Bấm các mục trên menu.
2. Chỉ URL thay đổi và thanh “URL hiện tại” ở góc dưới.
3. Chỉ trạng thái active của `NavLink`.
4. Gõ `/home` để minh họa component `Navigate` chuyển về `/`.

## 3. Route parameter, khoảng 4 phút

Đây là phần chính. Mở trang **Route params**.

### Bước 1: Giải thích route động

Chỉ dòng:

```jsx
<Route path="/orchids/:id" element={<OrchidDetail />} />
```

Nói:

> Dấu hai chấm khai báo một dynamic parameter. Tên parameter ở đây là `id`. Các URL `/orchids/1`, `/orchids/2` và `/orchids/3` đều dùng chung một route và một component.

### Bước 2: Giải thích cách tạo URL

Mở `src/pages/OrchidList.jsx` và chỉ:

```jsx
<Link to={`/orchids/${orchid.id}`}>
```

Nói:

> Mỗi card lấy id từ object để tạo link riêng. Link chỉ thay đổi URL và React Router render view phù hợp.

### Bước 3: Giải thích useParams

Mở một card, sau đó mở `src/pages/OrchidDetail.jsx` và chỉ:

```jsx
const { id } = useParams()
const orchid = orchids.find((item) => item.id === Number(id))
```

Nói:

> `useParams()` trả về object chứa giá trị đã khớp với route. Với URL `/orchids/3`, kết quả là `{ id: "3" }`. Param luôn là chuỗi. Trong dữ liệu, id là số nên em dùng `Number(id)` trước khi so sánh.

### Bước 4: Demo một component với nhiều dữ liệu

1. Bấm các nút id ở cuối trang chi tiết.
2. Chỉ URL, kết quả `useParams()` và nội dung hoa cùng thay đổi.
3. Nhấn Back để minh họa `navigate(-1)`.
4. Gõ trực tiếp `/orchids/99` để demo param hợp lệ về cú pháp nhưng không có dữ liệu.

Câu chốt:

> Route parameter phù hợp để định danh một tài nguyên, ví dụ product id, user id hoặc post id. Nó là một phần của path. Search parameter như `?q=hoa` thường dùng cho lọc, tìm kiếm hoặc sắp xếp.

## 4. Nested routes và Outlet, khoảng 1 phút

Mở **Nested routes**, bấm Tổng quan, Ghi chú và Việc cần làm.

Nói:

> Dashboard là route cha. Menu bên trái luôn giữ nguyên. `Outlet` đánh dấu vị trí render route con. Index route là nội dung mặc định khi URL chỉ là `/dashboard`.

Mở `src/App.jsx` để chỉ cấu trúc `Route` lồng nhau, sau đó mở `src/pages/Dashboard.jsx` để chỉ `<Outlet />`.

## 5. Router hooks, khoảng 1 phút

Mở trang **Hooks**:

- `useLocation()` trả về object location hiện tại.
- `useNavigate()` trả về hàm điều hướng bằng code.
- `useParams()` đọc dynamic params. Phần này đã demo sâu ở trang chi tiết.
- `useSearchParams()` đọc và sửa query string. Bấm Basic và Focus để thấy `?mode=` thay đổi.
- `useRoutes()` khai báo route bằng mảng JavaScript object. Mở mini demo để minh họa.

## 6. Kết luận, khoảng 30 giây

> `BrowserRouter` quản lý location. `Routes` và `Route` ánh xạ URL tới component. `Link` hỗ trợ navigation. Khi path có phần động như `:id`, `useParams()` giúp component đọc giá trị đó và tìm đúng dữ liệu cần hiển thị.

## Các URL nên chuẩn bị sẵn

```text
/
/orchids
/orchids/3
/orchids/99
/orchids?q=hồ
/dashboard
/dashboard/notes
/hooks?mode=focus
/mini/about
/home
/login
/mot-route-khong-ton-tai
```

## Câu hỏi dễ gặp

**Tại sao phải dùng `Number(id)`?**  
Vì giá trị lấy từ URL là chuỗi, còn `id` trong mảng là số.

**Route parameter khác search parameter thế nào?**  
Route parameter nằm trong path và thường định danh tài nguyên. Search parameter nằm sau dấu `?` và thường mô tả cách lọc hoặc hiển thị dữ liệu.

**Link khác thẻ `a` thế nào?**  
`Link` cho React Router xử lý việc chuyển view phía client. Thẻ `a` thông thường có thể khiến trình duyệt tải lại document.

**Khi nào dùng `useNavigate`?**  
Khi navigation xảy ra sau một hành động trong code, ví dụ submit thành công hoặc đăng xuất.

**Route `/orchids/99` có match không?**  
Có. Nó match `/orchids/:id`, nhưng ứng dụng không tìm thấy record có id 99 nên hiển thị trạng thái không có dữ liệu.

## Phần bổ sung: Custom Hook, khoảng 4 phút

Mở URL `/custom-hook`. Phần này bám theo slide 17 và 18 của Chapter 05.

### 1. Nhận diện Custom Hook

Chỉ vào `useStudyCounter()` và nói:

> Custom Hook là hàm JavaScript có tên bắt đầu bằng `use`. Ta dùng nó để tách logic có sử dụng Hook ra khỏi component. Custom Hook chia sẻ logic, không chia sẻ state.

Mở `src/hooks/useStudyCounter.js` để chỉ `useState`, giá trị trả về và các hàm cập nhật.

### 2. Demo `useDocumentTitle`

1. Gõ một chủ đề vào ô “Hôm nay bạn đang học gì?”.
2. Chỉ tên tab trình duyệt thay đổi ngay.
3. Mở `src/hooks/useDocumentTitle.js` và giải thích `useEffect` đồng bộ React với `document.title`.
4. Chỉ hàm cleanup khôi phục tiêu đề cũ khi rời trang.

### 3. Demo logic dùng lại

1. Tăng điểm của Đội Lá Xanh.
2. Chỉ ra điểm của Đội Hoa Tím không thay đổi.
3. Mở `src/components/StudyCounter.jsx` để chỉ mỗi component đều gọi `useStudyCounter(initialValue)`.

Câu chốt:

> Hai component dùng chung công thức xử lý từ custom hook, nhưng mỗi lần gọi hook tạo một state độc lập. Khi gặp logic state hoặc effect lặp lại ở nhiều component, đó là dấu hiệu tốt để cân nhắc tách custom hook.
