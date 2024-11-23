import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import Upload from "../components/Upload";
import { BsUpload } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { ImImage, ImImages } from "react-icons/im";
import { RiVideoUploadFill } from "react-icons/ri";

const CreatePost = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState<any>();
  const [img, setImg] = useState<any>();
  const [video, setVideo] = useState<any>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><Img src="${img?.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video?.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  // const mutation = useMutation({
  //   mutationFn: async (newPost) => {
  //     const token = await getToken();
  //     return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   },
  //   onSuccess: (res) => {
  //     toast.success("Post has been created");
  //     navigate(`/${res.data.slug}`);
  //   },
  // });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);

    // const data = {
    //   img: cover?.filePath || "",
    //   title: formData.get("title"),
    //   category: formData.get("category"),
    //   desc: formData.get("desc"),
    //   content: value,
    // };

    // console.log(data);

    // mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 mt-7">
      <h1 className="text-xl md:text-3xl font-light text-center">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <div className="bg-white p-3 flex flex-col gap-5">
        <input
          className="bg-transparent outline-none text-2xl text-gray-500"
          type="text"
          placeholder="Title goes here"
          name="title"
        />
        <textarea
          className="rounded-xl bg-transparent outline-none text-gray-500 text-sm"
          name="desc"
          placeholder="A Short Description"
        />
        </div>
        
        <div className="flex flex-1 relative bg-white">
         <div className=" w-full rounded-xl">
         <ReactQuill
            theme="snow"
            
            className="flex-1 rounded-xl border-none outline-none h-[280px] max-h-[290px] border-b-white"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <div className="flex items-center gap-8 mr-2 absolute bottom-4 left-12">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <span className="md:text-2xl text-xl text-blue-500 ">
                <ImImages />
                {/* <span className="absolute text-sm -top-6 -left-8 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 w-[80px]">Upload Image</span> */}
              </span>
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              <span className="md:text-2xl text-xl text-orange-700">
                <RiVideoUploadFill />
                {/* <span className="absolute text-sm opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 w-[80px]">Upload video</span> */}
              </span>
            </Upload>
        </div>
       <div className="flex items-center gap-5 absolute bottom-4 right-12">
       <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-white font-bold bg-blue-600 relative flex items-center gap-5 px-4 py-2">
            <BsUpload size={16} />
            <span className="text-sm">Add a cover photo</span>
          </button>
        </Upload>
        <div className="flex items-center gap-4">
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-transparent"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        </div>
      </div>
        
        <button
          // disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
           {/* {mutation.isPending ? "Loading..." */}
          Send
        </button>
        {"Progress:" + progress}
        {/* {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>

      {/* added cover image */}
      {
        cover && <div>
          
        </div>
      }

    </div>
  );
};

export default CreatePost;