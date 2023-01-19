import { useState, useEffect } from 'react'

// khi hook debounce nhận đc value . lúc này value đc thay đổi bởi useState nhưng hook useState chỉ nhận value đầu tiên nên value của
// useState không thay đổi. Nhưng value ở useEffect thay đổi và chạy hook useEffect Lúc này hàm setDebounced hoạt động nhưng
// vì đặt trong setTimeout nên nó delay kết quả trả về
function useDebounce(value, delay) {

  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(handler)


  }, [value])
  return debouncedValue
}

export default useDebounce;