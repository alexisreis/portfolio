export default function SectionContainer({ children }) {
  return (
    <div className="mx-auto my-auto flex h-auto max-w-2xl flex-col justify-between px-4 md:px-0 xl:max-w-2xl">
      {children}
    </div>
  );
}
