/**
 * Shadowrocket HTTP Response Script Template
 * Tự động parse JSON, xử lý an toàn với try/catch và trả về $done().
 */
if (typeof $response !== "undefined" && $response.body) {
  try {
    const data = JSON.parse($response.body);

    // TODO: Thêm logic kiểm tra hoặc chỉnh sửa các trường dữ liệu trên `data` tại đây
    // Ví dụ:
    // if (data && data.settings) {
    //   data.settings.debug = true;
    // }

    $done({ body: JSON.stringify(data) });
  } catch (err) {
    console.log("[CustomModule] JSON parse error: " + err.message);
    $done({});
  }
} else {
  $done({});
}
