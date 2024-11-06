export default function WidgetLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className=" mt-2 border-2 p-10 rounded-lg mx-5 my-10">{children}</div>
  );
}
