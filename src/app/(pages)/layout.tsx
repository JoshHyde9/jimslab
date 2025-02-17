export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="px-2 md:px-0">
        {children}
      </section>
  );
}
