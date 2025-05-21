const ShadowCard = ({ className }: { className?: string }) => {
  return (
    <>
      <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-primary-foreground from-10% to-transparent -z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-primary-foreground to-transparent to-20% -z-10"></div>
    </>
  );
};
export default ShadowCard;
