export default function PageTitle({ children }) {
  return (
    <h1 className="[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.8)] dark:[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] absolute bottom-0 left-0 right-0 m-2 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 underline decoration-4 underline-offset-8 decoration-primary-600">
      {children}
    </h1>
  );
}
