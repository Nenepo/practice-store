const IndPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <div className=" ">{slug}</div>;
    </>
  );
};

export default IndPage;
