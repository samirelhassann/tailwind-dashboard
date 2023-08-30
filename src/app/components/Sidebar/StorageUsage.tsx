export function StorageUsage() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 p-4">
      <div className="space-y-0.5">
        <span className="text-sm/5 font-medium text-violet-700">
          Used Space
        </span>
        <p className="text-sm/5 text-violet-700">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600" />
      </div>

      <div className="flex gap-3">
        <button type="button" className="text-sm font-medium text-violet-500">
          Dismiss
        </button>
        <button type="button" className="text-sm font-semibold text-violet-700">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
