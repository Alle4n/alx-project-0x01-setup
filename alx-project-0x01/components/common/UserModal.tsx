import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    group?: string,
    subGroup?: string
  ) => {
    const { name, value } = e.target;

    if (group && subGroup) {
      setUser(prev => ({
        ...prev,
        [group]: {
          ...prev[group],
          [subGroup]: {
            ...prev[group][subGroup],
            [name]: value
          }
        }
      }));
    } else if (group) {
      setUser(prev => ({
        ...prev,
        [group]: {
          ...prev[group],
          [name]: value
        }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="website" placeholder="Website" value={user.website} onChange={handleChange} className="w-full px-3 py-2 border rounded" />

          <hr />
          <div className="text-sm font-semibold">Address</div>
          <input type="text" name="street" placeholder="Street" value={user.address.street} onChange={(e) => handleChange(e, "address")} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="suite" placeholder="Suite" value={user.address.suite} onChange={(e) => handleChange(e, "address")} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="city" placeholder="City" value={user.address.city} onChange={(e) => handleChange(e, "address")} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={(e) => handleChange(e, "address")} className="w-full px-3 py-2 border rounded" />

          <div className="text-sm font-semibold">Geo</div>
          <input type="text" name="lat" placeholder="Latitude" value={user.address.geo.lat} onChange={(e) => handleChange(e, "address", "geo")} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="lng" placeholder="Longitude" value={user.address.geo.lng} onChange={(e) => handleChange(e, "address", "geo")} className="w-full px-3 py-2 border rounded" />

          <hr />
          <div className="text-sm font-semibold">Company</div>
          <input type="text" name="name" placeholder="Company Name" value={user.company.name} onChange={(e) => handleChange(e, "company")} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={(e) => handleChange(e, "company")} className="w-full px-3 py-2 border rounded" />
          <input type="text" name="bs" placeholder="Business" value={user.company.bs} onChange={(e) => handleChange(e, "company")} className="w-full px-3 py-2 border rounded" />

          <div className="flex justify-between pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-black">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
