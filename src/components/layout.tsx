export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#271A45] to-[#8257E5] flex flex-col items-center justify-center px-13 py-5">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}
