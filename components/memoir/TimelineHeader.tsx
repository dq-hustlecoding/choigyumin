interface TimelineHeaderProps {
  year: number;
  age: number;
  title: string;
  subtitle?: string;
}

const BIRTH_YEAR = 1991;

export default function TimelineHeader({ year, age, title, subtitle }: TimelineHeaderProps) {
  // 현재까지의 인생 진행률 (36세 기준, 100세까지 산다고 가정)
  const lifeProgress = Math.round((age / 100) * 100);
  
  return (
    <div className="mb-10 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* 년도/나이 */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary-500 text-white rounded-xl shadow-lg">
            <span className="text-2xl font-bold">{year}</span>
            <span className="text-xs opacity-80">년</span>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {age}세
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              만 {age - 1}세
            </div>
          </div>
        </div>

        {/* 인생 진행률 */}
        <div className="flex-1 max-w-xs">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>🌒 인생의 여정</span>
            <span>{lifeProgress}%</span>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-1000"
              style={{ width: `${lifeProgress}%` }}
            />
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-right">
            {100 - lifeProgress}%의 이야기가 남았다
          </div>
        </div>
      </div>

      {/* 타이틀 */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
