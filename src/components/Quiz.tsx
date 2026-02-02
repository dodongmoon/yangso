import React, { useState, useEffect } from 'react';
import type { Problem, ProblemType } from '../data/problems';
import { QuestionCard } from './QuestionCard';

interface QuizProps {
    problems: Problem[];
    config: {
        subject: string;
        type: ProblemType | 'ALL';
        order: 'SEQUENTIAL' | 'RANDOM';
        fontSize: 'SMALL' | 'MEDIUM' | 'LARGE';
    };
    onExit: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ problems, config, onExit }) => {
    const [queue, setQueue] = useState<Problem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        // 1. Filter
        let filtered = problems.filter(p => p.subject === config.subject);
        if (config.type !== 'ALL') {
            filtered = filtered.filter(p => p.type === config.type);
        }

        // 2. Order
        if (config.order === 'RANDOM') {
            filtered = [...filtered].sort(() => Math.random() - 0.5);
        } else {
            // Ensure sorted by ID if sequential
            filtered.sort((a, b) => a.id - b.id);
        }

        setQueue(filtered);
        setCurrentIndex(0);
        setCompleted(false);
    }, [problems, config]);

    const handleNext = () => {
        if (currentIndex < queue.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCompleted(true);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    if (queue.length === 0) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
                로딩 중이거나 문제가 없습니다.
            </div>
        );
    }

    if (completed) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center max-w-md w-full animate-fade-in-up">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-white mb-2">학습 완료!</h2>
                    <p className="text-indigo-200 mb-8">총 {queue.length}문제를 학습했습니다.</p>
                    <button
                        onClick={onExit}
                        className="w-full py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    const currentProblem = queue[currentIndex];
    const progress = ((currentIndex + 1) / queue.length) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white flex flex-col">
            {/* Header */}
            <div className="p-4 flex items-center justify-between bg-black/20 backdrop-blur-md sticky top-0 z-10">
                <button
                    onClick={onExit}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                    ✕ 나가기
                </button>
                <div className="text-center">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{config.subject}</span>
                    <div className="text-sm font-semibold">{currentIndex + 1} / {queue.length}</div>
                </div>
                <div className="w-10"></div> {/* Spacer */}
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-800 w-full">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <QuestionCard
                    key={currentProblem.id}
                    problem={currentProblem}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    isFirst={currentIndex === 0}
                    fontSize={config.fontSize}
                />
            </div>
        </div>
    );
};
