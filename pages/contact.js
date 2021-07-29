import React, { useState, useRef, useEffect } from "react";
import JotFormReact from "jotform-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const nameElement = useRef();
  const emailElement = useRef();
  const messageElement = useRef();

  const [status, setStatus] = useState("Submit");
  const [success, setSuccess] = useState(null);

  return (
    <>
      <Head>
        <title>Contact | GPS Embroidery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-start justify-start w-full h-56 pt-10 bg-header-img">
        <Header />

        {/* Title */}
        <div className="container z-20 flex flex-col mx-auto md:flex-row">
          <h2 className="mt-6 text-white">Contact</h2>
        </div>

        {/* Overlay */}
        <div className="absolute z-10 w-full h-56 -mt-10 opacity-75 bg-gradient-to-t from-black"></div>
      </header>

      <main className="py-12 bg-gray-100">
        <div className="container flex flex-col mx-auto md:flex-row">
          <div className="flex flex-col w-full mr-8 text-left md:w-2/3">
            {success ? (
              <div className="p-4 mb-8 bg-gray-100 border-2 border-gray-200">
                Thanks for the message! We&apos;ll get back to you as soon as
                possible.
              </div>
            ) : (
              <></>
            )}

            {/* Form */}
            <div>
              <JotFormReact formURL="https://form.jotform.com/212063708000036" />
            </div>
          </div>

          {/* LIZZIE'S ADDRESS */}
          <div className="w-full pt-8 md:pt-0 md:w-1/3">
            <p>
              If you would like to produce your own GPS Embroidery, or have any
              enquiries about the project please do get in touch with me via the
              contact form.
            </p>
            <p className="md:mt-12">
              <strong>Email:</strong>{" "}
              <Link href="mailto:lizziephilps@gmail.com">
                <a>lizziephilps@gmail.com</a>
              </Link>
            </p>
            <p>
              <strong>Facebook:</strong>{" "}
              <Link href="https://www.facebook.com/lizziePperfs/">
                <a target="blank">Lizzie Philps Performance</a>
              </Link>
            </p>
            <p>
              <strong>Twitter:</strong>{" "}
              <Link href="http://www.twitter.com/lizziepperfs">
                <a target="blank">LizziePPerfs</a>
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
