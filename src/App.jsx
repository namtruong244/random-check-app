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

        // Random tỉ lệ 50/50
        const isSuccess = Math.random() >= 0.5;
        setResult(isSuccess ? 'success' : 'error');
    };

    return (
        // Khung bao ngoài cùng: nền tối (bg-gray-900), căn giữa toàn bộ màn hình
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">

            {/* Box chứa nội dung chính */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-sm flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold text-white"></h1>

                {/* Ô Input */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        // Nếu phím bấm là Enter thì gọi hàm handleCheck
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

                {/* Khu vực hiển thị kết quả */}
                <div className="h-24 flex items-center justify-center mt-2">
                    {result === 'success' && (
                        <svg className="w-20 h-20 text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    )}

                    {result === 'error' && (
                        <svg className="w-20 h-20 text-red-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>
            </div>

        </div>
    );
}

export default App;