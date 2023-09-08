export function StorageUsage() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 p-4 dark:border dark:border-violet-500 dark:bg-zinc-800 dark:ring-4 dark:ring-violet-500/20">
      <div className="space-y-0.5">
        <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
          Used Space
        </span>
        <p className="text-sm/5 text-violet-700 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 dark:text-violet-300 dark:hover:text-zinc-200"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-violet-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
