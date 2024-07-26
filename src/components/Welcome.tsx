import { assistantProfile } from "../assets/assitantProfile";

export const Welcome: React.FC = () => (
  <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <div className="flex items-center mb-2">
      <img
        src={assistantProfile.image}
        alt="Assistant"
        className="w-20 h-20 rounded-full mr-4"
      />
    </div>
    <p>
    Welcome to BMW. My name is Sarah and I am your sales assistant. Please specify your requirements or inquiries regarding our vehicle models, features, or financing options. I am here to provide you with the necessary information and assistance. How may I assist you today?
    </p>
  </div>
);