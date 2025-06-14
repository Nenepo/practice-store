const IndPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <div className="">
        <p className="text-3xl px-9 pt-3">{slug}</p>;
      </div>
    </>
  );
};

export default IndPage;
