export default function AsideMainContent() {
  const title = "Website Status Pages";

  return (
    <>
      <aside
        className="ml-47 h-screen w-full"
        style={{ background: "#040438ff" }}
      >
        <div className="m-10">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>
      </aside>
    </>
  );
}
