import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <p className="text-gray-600 mt-2">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-blue-600 underline">{website}</p>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-700">🏢 {company.name}</h3>
        <p className="text-sm text-gray-500 italic">"{company.catchPhrase}"</p>
        <p className="text-sm text-gray-400">{company.bs}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>📍 {address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;