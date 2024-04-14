const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
        <img alt="PH logo" 
              src="https://web.programming-hero.com/static/media/ph_logo.cda7f338.svg"/>
          <a className="text-2xl">Programming Hero</a>
        </div>
        <div className="flex-none gap-10">
          <div className="form-control">
            <p className="btn btn-ghost">Home</p>
          </div>
          <div className="form-control">
            <p className="btn btn-ghost">Support</p>
          </div>
          <div className="form-control">
            <p className="btn btn-ghost">Blog</p>
          </div>
          <div className="form-control">
            <p className="btn btn-ghost">Dashboard</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/HzWwfnX/20231122-060502.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p>কোর্স শুরুর গুরুত্তপূর্ণ নির্দেশনা গুলো দেখার জন্য</p>
        <button className="btn btn-ghost">ক্লিক করুন</button>
      </div>
      <p className="text-x my-4">Welcome Back <span className="text-2xl font-bold">MD. Mosaiyeb Islam Meheraz</span>, Ready For Your Next Lesson?</p>
    </div>
  );
};

export default Navbar;
