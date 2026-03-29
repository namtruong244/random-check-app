import { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);

    const handleCheck = () => {
        // Nếu ô input trống thì không làm gì cả
        if (!inputValue.trim()) {
            alert("Vui lòng nhập một giá trị!");
            return;
        }

        // Tỉ lệ 70% ra V (success) và 30% ra X (error)
        const isSuccess = Math.random() >= 0.7;
        setResult(isSuccess ? 'success' : 'error');
    };

    return (
        // Khung bao ngoài cùng: nền tối
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">

            {/* Box chứa nội dung chính */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-white"></h1>

                {/* Ô Input */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCheck();
                        }
                    }}
                    placeholder="Nhập giá trị bất kỳ..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />

                {/* Nút Kiểm tra */}
                <button
                    onClick={handleCheck}
                    className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                >
                    Kiểm tra
                </button>

                {/* Khu vực hiển thị kết quả (Kéo giãn chiều cao một chút để chứa cả chữ) */}
                {/* Khu vực hiển thị kết quả (Thu gọn chiều cao và dàn ngang) */}
                <div className="h-16 flex items-center justify-center mt-2 w-full">

                    {/* Trường hợp: Tài khoản ổn định (Dấu V) */}
                    {result === 'success' && (
                        <div className="flex items-center gap-2 animate-bounce">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-green-500 font-semibold text-lg">
                                TK ổn định
                            </p>
                        </div>
                    )}

                    {/* Trường hợp: Tài khoản không ổn định (Dấu X) */}
                    {result === 'error' && (
                        <div className="flex items-center gap-2 animate-bounce">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <p className="text-red-500 font-semibold text-lg">
                                TK không ổn định
                            </p>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
}

export default App;