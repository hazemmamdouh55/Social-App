function Stats() {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-xl">
        <h2 className="font-bold text-xl">500+</h2>
        <p className="text-sm text-white/80">Jobs</p>
      </div>
      <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-xl">
        <h2 className="font-bold text-xl">1200+</h2>
        <p className="text-sm text-white/80">Teachers</p>
      </div>
      <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-xl">
        <h2 className="font-bold text-xl">95%</h2>
        <p className="text-sm text-white/80">Success</p>
      </div>
    </div>
  );
}

export default Stats;