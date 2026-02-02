import React, { useState, useMemo } from 'react';
import type { Problem, ProblemType } from '../data/problems';

interface HomeProps {
    problems: Problem[];
    onStart: (config: {
        subject: string;
        type: ProblemType | 'ALL';
        order: 'SEQUENTIAL' | 'RANDOM';
        optionOrder: 'SEQUENTIAL' | 'RANDOM';
        fontSize: 'SMALL' | 'MEDIUM' | 'LARGE';
    }) => void;
}

export const Home: React.FC<HomeProps> = ({ problems, onStart }) => {
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    // Default to OBJECTIVE as requested
    const [selectedType] = useState<ProblemType | 'ALL'>('OBJECTIVE');
    const [selectedOrder, setSelectedOrder] = useState<'SEQUENTIAL' | 'RANDOM' | null>(null);
    const [selectedOptionOrder, setSelectedOptionOrder] = useState<'SEQUENTIAL' | 'RANDOM' | null>(null);
    const [selectedFontSize, setSelectedFontSize] = useState<'SMALL' | 'MEDIUM' | 'LARGE'>('LARGE');

    const subjects = useMemo(() => Array.from(new Set(problems.map((p) => p.subject))), [problems]);



    const handleStart = () => {
        if (selectedSubject && selectedType && selectedOrder && selectedOptionOrder) {
            onStart({
                subject: selectedSubject,
                type: selectedType,
                order: selectedOrder,
                optionOrder: selectedOptionOrder,
                fontSize: selectedFontSize
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-8 animate-fade-in-up">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                        양소연의 문제은행
                    </h1>
                    <p className="text-indigo-200">기초 의학 마스터하기</p>
                </div>

                {/* 1. Subject Selection */}
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">1. 과목 선택</label>
                    <div className="grid grid-cols-2 gap-3">
                        {subjects.map((subj) => (
                            <button
                                key={subj}
                                onClick={() => setSelectedSubject(subj)}
                                className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${selectedSubject === subj
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                {subj}
                            </button>
                        ))}
                    </div>
                </div>



                {/* 2. Order Selection */}
                {selectedSubject && (
                    <div className="space-y-4 animate-fade-in">
                        <label className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">2. 순서 선택</label>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSelectedOrder('SEQUENTIAL')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedOrder === 'SEQUENTIAL'
                                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                문항순
                            </button>
                            <button
                                onClick={() => setSelectedOrder('RANDOM')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedOrder === 'RANDOM'
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                랜덤
                            </button>
                        </div>
                    </div>
                )}

                {/* 3. Option Selection */}
                {selectedOrder && (
                    <div className="space-y-4 animate-fade-in">
                        <label className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">3. 선지 선택</label>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSelectedOptionOrder('SEQUENTIAL')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedOptionOrder === 'SEQUENTIAL'
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                원래대로
                            </button>
                            <button
                                onClick={() => setSelectedOptionOrder('RANDOM')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedOptionOrder === 'RANDOM'
                                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                랜덤
                            </button>
                        </div>
                    </div>
                )}

                {/* 4. Font Size Selection */}
                {selectedOptionOrder && (
                    <div className="space-y-4 animate-fade-in">
                        <label className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">4. 글자 크기 선택</label>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSelectedFontSize('SMALL')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedFontSize === 'SMALL'
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                작게
                            </button>
                            <button
                                onClick={() => setSelectedFontSize('MEDIUM')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedFontSize === 'MEDIUM'
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                보통
                            </button>
                            <button
                                onClick={() => setSelectedFontSize('LARGE')}
                                className={`flex-1 p-3 rounded-xl transition-all duration-300 ${selectedFontSize === 'LARGE'
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                    : 'bg-white/5 text-indigo-100 hover:bg-white/10'
                                    }`}
                            >
                                크게
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={handleStart}
                    disabled={!selectedSubject || !selectedType || !selectedOrder || !selectedOptionOrder}
                    className="w-full py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    문제 풀기 시작
                </button>
            </div>
        </div>
    );
};
