import { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [result, setResult] = useState(null);

    // Thêm state để quản lý trạng thái đang phân tích
    const [isLoading, setIsLoading] = useState(false);

    const handleCheck = () => {
        // Nếu ô input trống thì không làm gì cả
        if (!inputValue.trim()) {
            alert("Vui lòng nhập một giá trị!");
            return;
        }

        // Bật trạng thái loading và xóa kết quả cũ
        setIsLoading(true);
        setResult(null);

        // Đợi 1.5 giây (1500ms) trước khi ra kết quả
        setTimeout(() => {
            // Tỉ lệ theo ý bạn (hiện tại >= 0.7 tức là khoảng 30% success)
            const isSuccess = Math.random() >= 0.7;
            setResult(isSuccess ? 'success' : 'error');

            // Tắt trạng thái loading
            setIsLoading(false);
        }, 1500);
    };

    return (
        // Khung bao ngoài cùng: nền đen hoàn toàn (bg-black)
        <div className="min-h-screen bg-black flex items-center justify-center p-4">

            {/* Box chứa nội dung chính: Thon gọn hơn, viền xanh lá (border-green-500) */}
            <div className="border border-green-500 p-4 shadow-xl w-full max-w-sm flex flex-col items-center gap-5">

                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isLoading) {
                            handleCheck();
                        }
                    }}
                    disabled={isLoading}
                    className="w-40 px-4 py-3 bg-transparent text-green-500 border border-green-500 font-mono text-center focus:outline-none focus:ring-1 focus:ring-green-400 placeholder-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />

                {/* Ô Input chính */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isLoading) {
                            handleCheck();
                        }
                    }}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-transparent text-green-500 border border-green-500 font-mono text-center focus:outline-none focus:ring-1 focus:ring-green-400 placeholder-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />

                {/* Nút Kiểm tra */}
                <button
                    onClick={handleCheck}
                    disabled={isLoading}
                    className="bg-transparent border border-green-500 text-green-500 font-mono font-semibold py-3 px-7 hover:bg-green-950 active:bg-green-900 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                    {isLoading ? 'ĐANG CHỜ...' : 'KIỂM TRA'}
                </button>

                {/* Khu vực hiển thị kết quả */}
                <div className="h-10 flex items-center justify-center mt-2 w-full text-sm font-mono">

                    {/* Hiển thị chữ đang phân tích khi đang loading */}
                    {isLoading && (
                        <p className="text-green-500 font-medium animate-pulse">đang phân tích kết quả...</p>
                    )}

                    {/* Trường hợp: Tài khoản ổn định (Dấu V xanh, text xanh) */}
                    {!isLoading && result === 'success' && (
                        <p className="text-green-500 font-medium">TK ổn định ✅</p>
                    )}

                    {/* Trường hợp: Tài khoản không ổn định (Dấu X đỏ, text đỏ) */}
                    {!isLoading && result === 'error' && (
                        <p className="text-red-500 font-medium">TK không ổn định ❌</p>
                    )}

                </div>
            </div>

        </div>
    );
}

export default App;