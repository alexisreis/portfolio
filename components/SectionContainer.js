export default function SectionContainer({ children }) {
  return (
    <div className="flex h-auto flex-col justify-between mx-auto my-auto max-w-2xl px-4 md:px-0 xl:max-w-2xl">
      {children}
    </div>
  );
}
