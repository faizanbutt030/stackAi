import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import SideButton from "./SideButton";
import SideBar from "./SideBar";
import cardimg from "../assets/cardimg.png";
import airtable from "../assets/airtable.webp";
import youtube from "../assets/youtube.webp";
import slack from "../assets/slack.webp";
import notion from "../assets/notion.webp";
import typeform from "../assets/typeform.webp";
import google from "../assets/Google.png";
import gmail from "../assets/gmail.webp";
import zapier from "../assets/zapier.png";
import zendesk from "../assets/zendesk.webp";
import wolfram from "../assets/wolfram-alpha.webp";
import hubspot from "../assets/hubspot.webp";

const Dashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const buttons = [
    {
      text: "All",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-folder-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
        </svg>
      ),
    },
    {
      text: "Basic",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
        </svg>
      ),
    },
    {
      text: "Support chatbots",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-chat-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
        </svg>
      ),
    },
    {
      text: "Knowledge Based",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-book-half"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
      ),
    },
    {
      text: "Document Analysis",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-file-earmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
        </svg>
      ),
    },
    {
      text: "Business Intelligence",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-file-bar-graph-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
        </svg>
      ),
    },
    {
      text: "Content Creation",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-camera-video-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
          />
        </svg>
      ),
    },
    {
      text: "Code",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#bf5670"
          className="bi bi-code-slash"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
        </svg>
      ),
    },
    {
      text: "Airtable",
      svg: <img src={airtable} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Youtube",
      svg: <img src={youtube} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Slack",
      svg: <img src={slack} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Notion",
      svg: <img src={notion} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Google",
      svg: <img src={google} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Typeform",
      svg: <img src={typeform} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Gmail",
      svg: <img src={gmail} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Zapier",
      svg: <img src={zapier} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Hubspot",
      svg: <img src={hubspot} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Wolfram Alpha",
      svg: <img src={wolfram} alt="" className="w-5 h-5 object-contain" />,
    },
    {
      text: "Zendesk",
      svg: <img src={zendesk} alt="" className="w-5 h-5 object-contain" />,
    },
  ];

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
    setSearchQuery("");
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts =
    activeButtonIndex === 0
      ? products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        )
      : products.filter(
          (product) =>
            product.use_case === buttons[activeButtonIndex].text &&
            (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase()))
        );

  useEffect(() => {
    fetch("https://customgbt.pythonanywhere.com/api/product/fetch/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.payload);
        console.log(data.payload);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-full flex bg-gray-100 items-center justify-center">
        <SideBar />

        <div className=" w-[84%] h-[95vh] bg-white rounded-3xl overflow-hidden mt-4">
          <div className="w-[100%] h-[18%] bg-gradient-to-r to-[#922991] from-[#eb456c] flex items-center justify-end pr-10">
            <button
              className="w-[11vw] h-[6vh] bg-[#eb456a] border-white border-[3.5px] rounded-md text-white flex xl:text-base sm:text-sm items-center sm:gap-1 xl:gap-4 px-2"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              New Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fff"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed top-0 left-0  w-[100vw] h-[100vh] flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="w-[90%] h-[88vh] bg-white rounded-e-xl relative flex overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#1a202c"
                  className="bi bi-x cursor-pointer absolute right-1 top-1"
                  viewBox="0 0 16 16"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>

                <div className="w-[17%] min-h-[100%] bg-gray-100 flex flex-col items-center px-2 overflow-y-auto pb-4">
                  <div className="w-[85%]">
                    <h1 className=" font-bold text-[#bf5670] md:text-xl xl:text-2xl mt-6 ">
                      Templates
                    </h1>
                  </div>
                  <div className="w-[85%]">
                    <h1 className=" font-medium text-[#bf5670] mt-8 text-lg">
                      By use case
                    </h1>
                  </div>
                  {buttons.map((button, index) => (
                    <>
                      {index === 8 && (
                        <div className="w-[85%]">
                          <h1 className="font-medium text-[#bf5670] text-lg mt-8">
                            By Integration
                          </h1>
                        </div>
                      )}
                      <div className="w-[85%] -ml-2">
                      <SideButton
                        key={index}
                        text={button.text}
                        svg={button.svg}
                        isActive={index === activeButtonIndex}
                        onClick={() => handleButtonClick(index)}
                      />
                      </div>
                    </>
                  ))}
                </div>

                <div className="w-[83%] h-[100%] bg-white p-10 overflow-y-auto">
                  <div className="w-[100%] h-11 border-[0.5px] border-[#31295e] text-[#bf5670] rounded-lg px-2 flex items-center my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#bf5670"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input
                      type="text"
                      className="w-[100%] h-10 outline-none  pl-2 placeholder:text-[#bf5670]"
                      placeholder="Search Templates"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                    />
                  </div>

                  <div className="flex justify-start items-start flex-wrap gap-3 float-start">
                    {filteredProducts.map((product, index) => (
                      <ProjectCard key={index} product={product}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-[300px] h-[280px] m-8 shadow-xl p-4 bg-white rounded-xl flex flex-col items-end cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#1a202c"
              className="bi bi-x cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
            <img
              src={cardimg}
              alt=""
              className="w-[100%] h-[75%] object-cover bg-black"
            />
            <h1 className=" font-semibold text-[#bf5670] mt-2 self-start">
              Simple ChatBot
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
