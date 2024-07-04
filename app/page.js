import Image from "next/image";
import Navbar from "./components/Navbar";
import DepartmentCard from "./components/DepartmentCard";
import EnquiryCard from "./components/EnquiryCard";
import Hanger from "./components/icons/Hanger";
import Faq from "./components/icons/Faq";
import Message from "./components/icons/Message";
import Down from "./components/icons/Down";
import Instagram from "./components/icons/Instagram";
import Facebook from "./components/icons/Facebook";
import Pintrest from "./components/icons/Pintrest";
import Twitter from "./components/icons/Twitter";
import Snapchat from "./components/icons/Snapchat";
import Youtube from "./components/icons/Youtube";
import Apple from "./components/icons/Apple";
import PlayStore from "./components/icons/PlayStore";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <h1 className="text-2xl font-medium my-3 px-4">Choose a department</h1>
      <div className=" overflow-x-auto pl-4">
        <DepartmentCard
          departmentName={"WOMENS WEAR"}
          backgroundImage={"/image"}
        />
        <DepartmentCard
          departmentName={"MENS WEAR"}
          backgroundImage={"/image"}
        />
        <DepartmentCard
          departmentName={"KIDS WEAR"}
          backgroundImage={"/image"}
        />
      </div>

      <div className="flex flex-col gap-4 mt-8 px-4">
        <EnquiryCard>
          <Hanger />
          <p>HOW TO SHOP</p>
          <p>Your guide to shopping and placing orders</p>
        </EnquiryCard>
        <EnquiryCard>
          <Faq />
          <p>FAQS</p>
          <p>Your questions answered</p>
        </EnquiryCard>
        <EnquiryCard>
          <Message />
          <p>NEED HELP?</p>
          <p>Contact our global Customer Services team</p>
        </EnquiryCard>
      </div>

      <div className="flex flex-col gap-4 mt-8 px-4">
        <h2 className="font-bold text-2xl">NEVER MISS A THING</h2>
        <p>
          Sign up for promotions, tailored new arrivals, stock updates and more
          - straight to your inbox
        </p>
        <p>GET UPDATES BY</p>
        <div className="flex gap-2">
          <input type="checkbox" className="w-6 border border-black" />
          <label>Email</label>
        </div>
        <input
          type="email"
          placeholder="Your email address"
          className="rounded-lg border border-black p-4 py-3"
        />
        <div className="flex gap-2">
          <input type="checkbox" className="w-6 border border-black" />
          <label>SMS</label>
        </div>
        <button className="w-full py-2 text-white bg-black rounded-lg py-3">
          Sign Up
        </button>
        <p>
          By signing up, you consent to receiving marketing by email and/or SMS
          and acknowledge you have read our{" "}
          <span className="underline">Privacy Policy.</span> Unsunscribe anytime
          at the bottom of our emails or by replying STOP to any of our SMS.
        </p>
      </div>
      <footer className="bg-[#E6E6E6] mt-6 w-full px-4 py-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <p>CUSTOMER SERVICE</p>
          <Down />
        </div>
        <div className="flex justify-between w-full">
          <p>ABOUT FARFETCH</p>
          <Down />
        </div>
        <div className="flex justify-between w-full">
          <p>DISCOUNTS AND MEMBERSHIP</p>
          <Down />
        </div>

        <div className="socials flex flex-col gap-2">
          <p className="font-bold text-sm">Follow us</p>
          <div className="socials-icons flex gap-4 px-1">
            <Instagram />
            <Facebook />
            <Pintrest />
            <Twitter />
            <Snapchat />
            <Youtube />
          </div>
        </div>
        <div className="app-download flex flex-col gap-2">
          <p className="font-bold text-sm">FARFETCH App</p>
          <div className="flex gap-3">
            <div className="flex gap-2 px-3 py-1 rounded bg-black items-center">
              <Apple />
              <div className="text-white flex flex-col">
                <p className="text-[10px]">Download on the</p>
                <p className="text-sm font-medium">App Store</p>
              </div>
            </div>
            <div className="flex gap-2 px-3 py-1 rounded bg-black items-center">
              <PlayStore />
              <div className="text-white flex flex-col">
                <p className="text-[10px]">Download on the</p>
                <p className="text-sm font-medium">App Store</p>
              </div>
            </div>
          </div>
        </div>
        <p className="underline">Tell us what you think</p>

        <hr className="w-full "/>

        <div className="flex gap-4">
          <p className="underline">Privacy policy</p>
          <p className="underline">Terms and conditions</p>
        </div>
        <div className="flex gap-4">
          <p className="underline">Accessibility</p>
          <p className="underline">Sitemap</p>
        </div>
        <p>
          'FARFETCH' and the 'FARFETCH' logo are trade marks os FARFETCH UK Limited and are registered in numerous jurisdictions around the world.<br/>
          &copy; Copyright 2024 FARFETCH UK Limited. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
