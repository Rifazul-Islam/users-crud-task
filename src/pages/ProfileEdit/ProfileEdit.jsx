import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ProfileEdit = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handlerSignOut = () => {
    userLogOut()
      .then(() => {
        // toast.success("user SigOut Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Data Get
  const { data: userInfo = {}, refetch } = useQuery({
    queryKey: ["userInfo"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `https://server-site-sage.vercel.app/user/${user?.email}`
      );
      return res.data;
    },
  });

  // Update System Emplement

  const handlerLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    console.log(name, image);

    const infoEdit = {
      name: name,
      image: image,
    };

    axios
      .put(
        `https://server-site-sage.vercel.app/user/update/${userInfo?._id}`,
        infoEdit
      )
      .then((res) => {
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          toast.success("Your Profile Edit SuccessFully");
          refetch();
        }
      });
  };

  // Delete System Emplement

  // Delete System
  const handlerDelete = () => {
    axios
      .delete(
        `https://server-site-sage.vercel.app/user/delete/${userInfo?._id}`
      )
      .then((res) => {
        if (res?.data?.deletedCount > 0) {
          toast.success("Your Information Delete Successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      {userInfo?.email ? (
        <>
          {" "}
          <div className="px-20 mt-7 mb-52">
            <div className="overflow-x-auto border-2">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-2xl font-semibold text-black">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit-Info</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="font-semibold">
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          className="w-14 h-14 rounded-full object-cover"
                          src={userInfo?.image}
                          alt=""
                        />
                      </div>
                    </td>
                    <td> {userInfo?.name} </td>
                    <td> {userInfo?.email}</td>
                    <th>
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className="btn btn-primary btn-xs"
                      >
                        Edit-Info
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          handlerDelete(userInfo?._id);
                          handlerSignOut();
                        }}
                        className="btn btn-secondary btn-xs"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <form onSubmit={handlerLogin} className="card-body">
                  <div className="flex gap-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered"
                        defaultValue={userInfo?.email}
                        readOnly
                      />
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="text"
                        name="name"
                        defaultValue={userInfo?.name}
                        className="input input-bordered"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                      type="photo"
                      name="image"
                      placeholder="photo"
                      className="input input-bordered"
                      defaultValue={userInfo?.image}
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>{" "}
        </>
      ) : (
        <p className="text-center my-52 font-bold"> No Data </p>
      )}
    </div>
  );
};

export default ProfileEdit;
