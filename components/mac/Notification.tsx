"use client";

type Props = {
  readonly title: string;
  readonly body: string;
  readonly onClick: () => void;
  readonly onClose: () => void;
};

export default function Notification({ title, body, onClick, onClose }: Props) {
  return (
    <button
      type="button"
      className="fixed right-0 mr-6 w-[440px] bg-panel border border-neutral-700 rounded-mac shadow-2xl z-[10000] top-[2.51rem] text-left focus:outline-none focus:ring-2 focus:ring-neutral-500"
      onClick={onClick}
      aria-label={`Open notification: ${title}`}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
        <span className="text-base font-semibold">{title}</span>
        <button
          type="button"
          aria-label="Close notification"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-neutral-400 hover:text-neutral-200 text-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
        >
          ×
        </button>
      </div>
      <div className="px-5 py-4 text-base text-neutral-200">{body}</div>
    </button>
  );
}