const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-md"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1602587921225-3cca658d31bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80")`,
        }}
      >
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">LOVE & Travel</h1>
            <p className="mb-5 text-1xl">
              Love and travel are two of life greatest pleasures. They are both
              experiences that can broaden our horizons, enrich our souls, and
              make us feel more alive.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Search Service"
              className="text-center input input-bordered  w-full max-w-xs text-black "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
