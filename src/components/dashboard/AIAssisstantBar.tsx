import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIAssistantBar = () => {

  const navigate = useNavigate();

  return (

    <>

      {/* FLOATING AI BUTTON */}
      <button
        onClick={() =>
          navigate("/dashboard/chatbot")
        }

        className="
          fixed
          bottom-6
          right-6
          z-50

          flex
          items-center
          gap-2

          rounded-full

          bg-gradient-to-r
          from-cyan-950
          to-teal-600

          px-5
          py-3

          text-white

          shadow-2xl

          transition-all
          duration-300

          hover:scale-105
          hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]

          active:scale-95
        "
      >

        {/* ICON */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            bg-white/20
            backdrop-blur-sm
          "
        >
          <Bot className="h-5 w-5" />
        </div>

        {/* TEXT */}
        <div className="hidden sm:block text-left">

          <p className="text-sm font-semibold">
            Vyapara AI
          </p>

          <p className="text-xs text-white/80">
            Ask anything
          </p>

        </div>

      </button>

    </>

  );
};

export default AIAssistantBar;