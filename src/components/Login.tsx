import React, { useState } from 'react';

interface LoginProps {
    onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "0121") {
            onLogin();
        } else {
            setError(true);
            setPassword("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-fade-in-up">
                <div className="text-center mb-8">
                    <div className="text-4xl mb-4">🔒</div>
                    <h2 className="text-2xl font-bold text-white mb-2">접속 코드 입력</h2>
                    <p className="text-indigo-200 text-sm">서비스를 이용하려면 코드를 입력하세요.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            placeholder="코드 4자리"
                            maxLength={4}
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-center text-white text-xl tracking-widest placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm text-center animate-shake">
                            코드가 일치하지 않습니다.
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all"
                    >
                        접속하기
                    </button>
                </form>
            </div>
        </div>
    );
};
