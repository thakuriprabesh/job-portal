export function Stat() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold mb-2">10,000+</p>
            <p className="text-xl">Jobs Posted</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">5,000+</p>
            <p className="text-xl">Employers Connected</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">1M+</p>
            <p className="text-xl">Successful Placements</p>
          </div>
        </div>
      </div>
    </section>
  );
}
