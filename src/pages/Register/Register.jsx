import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
const Register = () => {
  const { createNewUser, userProfileUpdate, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      return toast.error("Please Must be Six character");
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      return toast.error(
        "Please At last one UpperCase and one LowerCase letter provide"
      );
    }

    // console.log("check", name, email, password, image);
    const userInformation = {
      name: name,
      email: email,
      image: image,
    };
    // console.log(userInformation);

    axios
      .post("https://server-site-sage.vercel.app/user", userInformation)
      .then((res) => {
        console.log(res.data);
      });

    // new User Create
    createNewUser(email, password)
      .then((result) => {
        const userInfo = result.user;
        console.log(userInfo);
        toast.success("Create user Successfully");

        // Profile Update
        userProfileUpdate(userInfo, { displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...userInfo, displayName: name, photoURL: image });
            toast.success("User Profile Update");
          })
          .catch((error) => {
            toast.error(error.message);
          });

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  //   console.log(user);

  return (
    <div>
      <h1 className="text-center py-10 text-4xl font-bold"> Register Now !</h1>
      <div className="card flex-shrink-0 w-[400px] mx-auto shadow-2xl border bg-base-100">
        <form onSubmit={handlerRegister} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

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

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={open ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <span
              className="cursor-pointer absolute right-4 bottom-4  text-xl "
              onClick={() => setOpen(!open)}
            >
              {" "}
              {open ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
            </span>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary bg-orange-600 border-none capitalize text-xl">
              Register
            </button>
          </div>
        </form>

        <p className="mb-4 text-center font-bold text-indigo-400">
          Already have an account please{" "}
          <Link to="/login" className="text-orange-600">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
