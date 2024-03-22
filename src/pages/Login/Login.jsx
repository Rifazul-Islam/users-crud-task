import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // user Login
    loginUser(email, password)
      .then((result) => {
        const userInfo = result.user;
        console.log(userInfo);
        toast.success("User Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mb-10">
      <h1 className="text-center py-10 text-2xl font-bold "> Login Now !</h1>
      <div className="card flex-shrink-0 w-[400px] mx-auto shadow-2xl border bg-base-100">
        <form onSubmit={handlerLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className="mb-4 text-center font-bold text-indigo-400">
          Do not have an account? Create an account{" "}
          <Link to="/register" className="text-orange-600">
            {" "}
            Register{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
