interface TimelineHeaderProps {
  year: number;
  age: number;
  title: string;
  subtitle?: string;
}

export default function TimelineHeader({ year, age, title, subtitle }: TimelineHeaderProps) {
  return (
    <div className="mb-10 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        {/* 년도 */}
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary-500 text-white rounded-xl shadow-lg">
          <span className="text-2xl font-bold">{year}</span>
          <span className="text-xs opacity-80">년</span>
        </div>
        
        {/* 나이 */}
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {age}세
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            (만 {age - 1}세)
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
