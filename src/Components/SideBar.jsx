import logo from "../assets/logo.png";


const SideBar = () => {
  return (
    <div className=" w-[15%] h-[100vh] flex flex-col  items-center">
    <img
      src={logo}
      alt="logo"
      className="w-20 h-20 object-contain mt-4 mb-3"
    />

    <button className="w-[85%] h-9 bg-gradient-to-r from-[#922991] to-[#eb456c] rounded-md text-white font-normal text-sm flex items-center pl-3 gap-2 mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-house-door-fill"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
      </svg>
      Home
    </button>
    <button className=" w-[85%] h-9  rounded-md text-[#31286a] font-normal text-sm flex items-center pl-3 gap-2 mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#31286a"
        className="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
        />
      </svg>
      New Folder
    </button>

    <div className="w-[85%] "><h1 className="text-[#31286a] font-semibold text-lg  mb-2">Recents</h1></div>
    <button className=" w-[85%] h-9  rounded-md text-[#31286a] font-normal text-sm flex items-center pl-3 gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#31286a"
        className="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
        />
      </svg>
      Simple Chatbot
    </button>
  </div>
  )
}
export default SideBar;