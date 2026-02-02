import React, { useState } from 'react';
import type { Problem } from '../data/problems';

interface QuestionCardProps {
    problem: Problem;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    fontSize: 'SMALL' | 'MEDIUM' | 'LARGE';
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ problem, onNext, onPrev, isFirst, fontSize }) => {
    // Store selected indices as an array
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [subjectiveInput, setSubjectiveInput] = useState("");
    const [isImageModalOpen, setImageModalOpen] = useState(false);

    const isObjective = problem.type === 'OBJECTIVE';

    // Parse correct answers from string (e.g. "1" or "1,5") -> 0-indexed ints [0] or [0,4]
    // User data is 1-based, so subtract 1.
    const correctIndices = React.useMemo(() => {
        if (!isObjective) return [];
        return problem.answer.split(',')
            .map(s => parseInt(s.trim()) - 1)
            .filter(n => !isNaN(n));
    }, [problem.answer, isObjective]);

    const handleOptionClick = (idx: number) => {
        if (showAnswer) return;

        // Toggle selection? Or just accumulate? 
        // User said "press both to grade". Usually implies toggle is allowed until limit is reached?
        // Or strictly: "Press one -> Selected. Press second -> Auto Check".
        // Let's implement accumulation. If user clicks one that is already selected, maybe deselect?
        // But for "instant feedback", usually you just click and it sticks.

        let newSelected = [...selectedOptions];
        if (newSelected.includes(idx)) {
            // Deselect allowed if mistake?
            newSelected = newSelected.filter(i => i !== idx);
        } else {
            newSelected.push(idx);
        }

        setSelectedOptions(newSelected);

        // Check if we reached the required number of answers
        if (newSelected.length === correctIndices.length) {
            setShowAnswer(true);
        }
    };

    const handleCheckSubjective = () => {
        setShowAnswer(true);
    };

    const handleNextClick = () => {
        setSelectedOptions([]);
        setShowAnswer(false);
        setSubjectiveInput("");
        onNext();
    };

    const handlePrevClick = () => {
        // We should probably reset state when going back too, or keep it?
        // Typically in a quiz app, going back might show previous state, but this simple
        // implementation resets state on next. Let's reset on prev too for consistency
        // unless we want to persist state (which would require lifting state up to Quiz.tsx).
        // For now, let's reset to avoid confusion.
        setSelectedOptions([]);
        setShowAnswer(false);
        setSubjectiveInput("");
        onPrev();
    };

    return (
        <>
            <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
                {/* Question Header */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold tracking-wide">
                            {problem.type === 'OBJECTIVE' ? '객관식' : '주관식'}
                        </span>
                        <div className="flex items-center gap-2">
                            {!isFirst && (
                                <button
                                    onClick={handlePrevClick}
                                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 hover:bg-white/10 px-3 py-1.5 rounded-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>이전</span>
                                </button>
                            )}
                            {!showAnswer && (
                                <button
                                    onClick={handleNextClick}
                                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 hover:bg-white/10 px-3 py-1.5 rounded-lg"
                                >
                                    <span>건너뛰기</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                            <span className="text-indigo-300 text-sm font-medium ml-2">문항 {problem.id}번</span>
                        </div>
                    </div>
                    <h2 className={`font-bold text-white leading-relaxed ${fontSize === 'SMALL' ? 'text-lg' :
                            fontSize === 'LARGE' ? 'text-2xl' : 'text-xl'
                        }`}>
                        {problem.question}
                    </h2>
                    {isObjective && correctIndices.length > 1 && !showAnswer && (
                        <p className="text-sm text-yellow-300 mt-2">※ 정답 {correctIndices.length}개를 모두 선택하세요.</p>
                    )}
                </div>

                {/* Image Area */}
                {problem.image && (
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/20">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/${problem.image}`}
                            alt="Problem Reference"
                            className="w-full h-auto object-contain max-h-96 cursor-zoom-in hover:opacity-90 transition-opacity"
                            onClick={() => setImageModalOpen(true)}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <p className="text-center text-xs text-gray-400 py-2">
                            🔍 이미지를 클릭하면 확대해서 볼 수 있습니다
                        </p>
                    </div>
                )}

                {/* Answer Area */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    {isObjective ? (
                        <div className="space-y-3">
                            {problem.options?.map((opt, idx) => {
                                const isSelected = selectedOptions.includes(idx);
                                const isCorrect = correctIndices.includes(idx);

                                let cardClass = "bg-white/5 border-transparent hover:bg-white/10";

                                if (showAnswer) {
                                    if (isCorrect) {
                                        // Correct answer (whether selected or not, show it)
                                        cardClass = "bg-green-500/20 border-green-500 text-green-100";
                                    } else if (isSelected && !isCorrect) {
                                        // Wrong selection
                                        cardClass = "bg-red-500/20 border-red-500 text-red-100";
                                    } else {
                                        cardClass = "opacity-50";
                                    }
                                } else if (isSelected) {
                                    cardClass = "bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/20 transform scale-[1.01]";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(idx)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 text-indigo-100 ${cardClass}`}
                                        disabled={showAnswer}
                                    >
                                        <span className="font-bold mr-3 text-lg opacity-60">{idx + 1})</span>
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <textarea
                                value={subjectiveInput}
                                onChange={(e) => setSubjectiveInput(e.target.value)}
                                placeholder="정답을 입력하세요..."
                                disabled={showAnswer}
                                className="w-full h-32 bg-black/20 rounded-xl p-4 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                            {showAnswer && (
                                <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-xl text-green-200">
                                    <p className="text-xs uppercase font-bold text-green-400 mb-1">정답</p>
                                    <p>{problem.answer}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="pb-8 space-y-3">
                    {!showAnswer ? (
                        <>
                            {!isObjective ? (
                                <button
                                    onClick={handleCheckSubjective}
                                    disabled={!subjectiveInput.trim()}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform"
                                >
                                    정답 확인
                                </button>
                            ) : (
                                // Placeholder or hint for objective
                                <div className="text-center text-gray-400 text-sm py-2">
                                    {selectedOptions.length} / {correctIndices.length} 개 선택됨
                                </div>
                            )}
                        </>
                    ) : (
                        <button
                            onClick={handleNextClick}
                            className="w-full py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-xl hover:bg-indigo-50 transform transition-all active:scale-[0.98]"
                        >
                            다음 문제 →
                        </button>
                    )}
                </div>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && problem.image && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setImageModalOpen(false)}
                >
                    <div className="relative max-w-full max-h-full">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/${problem.image}`}
                            alt="Original Problem"
                            className="max-w-screen max-h-screen object-contain rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setImageModalOpen(false);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-sm pointer-events-none">
                            배경을 클릭하면 닫힙니다
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
