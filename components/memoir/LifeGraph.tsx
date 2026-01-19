interface LifePoint {
  year: number;
  age: number;
  event: string;
  score: number; // -100 to 100
  emoji: string;
}

interface LifeGraphProps {
  points: LifePoint[];
  currentYear: number;
}

export default function LifeGraph({ points, currentYear }: LifeGraphProps) {
  const maxScore = 100;
  const minScore = -100;
  const range = maxScore - minScore;

  // 현재 년도까지의 포인트만 필터
  const visiblePoints = points.filter(p => p.year <= currentYear);

  return (
    <div className="my-12 p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
        📈 인생 바이오리듬
        <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
          (이 시점까지의 감정 곡선)
        </span>
      </h3>

      {/* 그래프 영역 */}
      <div className="relative h-48 mb-4">
        {/* 기준선 */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600" />
        <div className="absolute top-1/2 left-0 text-xs text-gray-400 -translate-y-1/2 -translate-x-6">
          0
        </div>
        <div className="absolute top-0 left-0 text-xs text-green-500 -translate-x-8">
          +100
        </div>
        <div className="absolute bottom-0 left-0 text-xs text-red-500 -translate-x-8">
          -100
        </div>

        {/* 데이터 포인트들 */}
        <svg className="w-full h-full" preserveAspectRatio="none">
          {/* 그라디언트 영역 */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(250, 204, 21)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* 라인 */}
          {visiblePoints.length > 1 && (
            <polyline
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={visiblePoints.map((point, i) => {
                const x = (i / (visiblePoints.length - 1)) * 100;
                const y = ((maxScore - point.score) / range) * 100;
                return `${x}%,${y}%`;
              }).join(' ')}
              className="drop-shadow-md"
              style={{ stroke: 'rgb(99, 102, 241)' }}
            />
          )}

          {/* 포인트들 */}
          {visiblePoints.map((point, i) => {
            const x = visiblePoints.length === 1 ? 50 : (i / (visiblePoints.length - 1)) * 100;
            const y = ((maxScore - point.score) / range) * 100;
            const color = point.score > 30 ? 'rgb(34, 197, 94)' : 
                         point.score < -30 ? 'rgb(239, 68, 68)' : 
                         'rgb(250, 204, 21)';
            return (
              <g key={i}>
                <circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="8"
                  fill={color}
                  className="drop-shadow-lg"
                />
                <text
                  x={`${x}%`}
                  y={`${y}%`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs"
                  style={{ fontSize: '10px' }}
                >
                  {point.emoji}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap gap-2 justify-center">
        {visiblePoints.map((point, i) => (
          <div 
            key={i}
            className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-800 rounded-lg text-xs border border-gray-200 dark:border-gray-700"
          >
            <span>{point.emoji}</span>
            <span className="text-gray-600 dark:text-gray-300">{point.age}세</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 dark:text-gray-400 truncate max-w-24">{point.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 전체 인생 포인트 데이터
export const lifePoints: LifePoint[] = [
  { year: 1991, age: 1, event: '탄생', score: 50, emoji: '👶' },
  { year: 1996, age: 6, event: '화곡동 유치원', score: 20, emoji: '🏠' },
  { year: 1997, age: 7, event: '시화 이사', score: 10, emoji: '📦' },
  { year: 1998, age: 8, event: '제주도 이사', score: 40, emoji: '🏝️' },
  { year: 1999, age: 9, event: '운명적 재회', score: 60, emoji: '🤝' },
  { year: 2003, age: 13, event: '도원결의', score: 80, emoji: '⚔️' },
  { year: 2004, age: 14, event: '중학교 입학', score: 30, emoji: '📚' },
  { year: 2006, age: 16, event: '과학고 불합격', score: -20, emoji: '😢' },
  { year: 2007, age: 17, event: '진성고 입학', score: 50, emoji: '🎒' },
  { year: 2009, age: 19, event: '수시 불합격', score: -10, emoji: '😰' },
  { year: 2010, age: 20, event: '서울대 합격', score: 100, emoji: '🎉' },
];
