import { FC } from "react";
import {
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact: FC = () => {
  return (
    <div>
      <div className="bg-zinc-200 py-7 mt-auto max-w-screen-xl m-auto">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="col-span-1 flex flex-row space-x-3">
            <FaRegAddressCard className="w-12 h-12  p-2" />
            <div className="space-y-2">
              <p className="text-gray-500">ADDRESS</p>
              <p className="text-gray-600 font-medium">JL. INDONESIA MERDEKA</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-row space-x-3">
            <FaPhoneAlt className="w-12 h-12 p-1" />
            <div className="space-y-2">
              <p className="text-gray-500">PHONES</p>
              <p className="text-gray-600 font-medium">08123456789</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-row space-x-3">
            <MdOutlineEmail className="w-12 h-12 p-1" />
            <div className="space-y-2">
              <p className="text-gray-500">EMAIL</p>
              <p className="text-gray-600 font-medium">rafialif99@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
