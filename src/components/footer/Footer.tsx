import React from "react";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footercolor p-12 mt-12">
      <div className="flex items-center justify-around">
        <div className="mb-8">
          <Image
            src="/assets/images/seed-logo.png"
            alt="logo"
            width={110}
            height={46}
            className="mb-8"
          />
          <p className="text-gray text-sm font-primary mb-8">
            Secure Seedfund is a product of
            <br /> Seedbuilders Innovations.
          </p>
          <div className="flex items-center gap-6 mb-6">
            <TiSocialTwitter />
            <BiLogoFacebookCircle />
            <FaInstagram />
            <IoLogoGithub />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-primary text-sm text-bar font-semibold">COMPANY</p>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            About
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Features
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Works
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Career
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-primary text-sm text-bar font-semibold">HELP</p>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Customer Support
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Delivery Details
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-primary text-sm text-bar font-semibold">
            RESOURCES
          </p>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Free eBooks
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Development Tutorial
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            How to - Blog
          </Link>
          <Link href="/" className="text-sm text-gray font-primary leading-5">
            Youtube Playlist
          </Link>
        </div>
      </div>
      <div className="mx-20">
        <p className="text-slatecolor text-base font-secondary">
          Important Message
        </p>
        <p className="font-primary text-grey text-sm leading-7 text-justify">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin amet risus non
          hendrerit adipiscing feugiat vulputate. Et turpis et phasellus massa.
          Justo eu morbi porttitor urna ipsum. At enim vestibulum bibendum eget
          urna ut leo in et. Elit elementum odio fermentum arcu. Mauris sem
          commodo aliquet aliquet id consequat pellentesque auctor. Bibendum
          felis rutrum amet habitasse at sit at. Praesent sit eget placerat
          magnis. Arcu tortor molestie magna at aliquet interdum quis amet
          ultricies. Vitae cursus viverra condimentum amet. Diam eros integer et
          semper eget auctor. Viverra ultrices vestibulum consequat senectus
          nulla ut odio nullam sed. Tellus volutpat condimentum in egestas
          vulputate commodo libero.
        </p>

        <p className="font-primary text-grey text-sm leading-7 text-justify mt-6">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin amet risus non
          hendrerit adipiscing feugiat vulputate. Et turpis et phasellus massa.
          Justo eu morbi porttitor urna ipsum. At enim vestibulum bibendum eget
          urna ut leo in et. Elit elementum odio fermentum arcu. Mauris sem
          commodo aliquet aliquet id consequat pellentesque auctor. Bibendum
          felis rutrum amet habitasse at sit at. Praesent sit eget placerat
          magnis. Arcu tortor molestie magna at aliquet interdum quis amet
          ultricies. Vitae cursus viverra condimentum amet. Diam eros integer et
          semper eget auctor. Viverra ultrices vestibulum consequat senectus
          nulla ut odio nullam sed. Tellus volutpat condimentum in egestas
          vulputate commodo libero.
        </p>

        <p className="font-primary text-grey text-sm leading-7 text-justify mt-6">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin amet risus non
          hendrerit adipiscing feugiat vulputate. Et turpis et phasellus massa.
          Justo eu morbi porttitor urna ipsum. At enim vestibulum bibendum eget
          urna ut leo in et. Elit elementum odio fermentum arcu. Mauris sem
          commodo aliquet aliquet id consequat pellentesque auctor. Bibendum
          felis rutrum amet habitasse at sit at. Praesent sit eget placerat
          magnis. Arcu tortor molestie magna at aliquet interdum quis amet
          ultricies. Vitae cursus viverra condimentum amet. Diam eros integer et
          semper eget auctor. Viverra ultrices vestibulum consequat senectus
          nulla ut odio nullam sed. Tellus volutpat condimentum in egestas
          vulputate commodo libero.
        </p>
      </div>
    </div>
  );
};

export default Footer;
