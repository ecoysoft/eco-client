import Link from "next/link";
import React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: "#F2F2F2",
    maxWidth: "100%",
    margin: "auto",
    color: "#2d3748",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const itemStyle: React.CSSProperties = {
    padding: "1.25rem",
    width: "12rem",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "0.825rem",
    padding: "0.25rem",
    textTransform: "uppercase",
    color: "#ababab",
    fontWeight: 500,
  };

  const linkStyle: React.CSSProperties = {
    marginTop: "0.75rem",
    display: "block",
    color: "#696668",
    fontSize: "0.675rem",
    padding: "0.25rem",
  };

  const footerBottomStyle: React.CSSProperties = {
    backgroundColor: "#f7fafc",
    paddingTop: "0.5rem",
    display: "flex",
    paddingBottom: "0.625rem",
    paddingLeft: "0.375rem",
    margin: "auto",
    borderTop: "1px solid #cbd5e0",
    color: "#2d3748",
    fontSize: "0.875rem",
    flexDirection: "column",
    maxWidth: "72rem",
  };

  const socialIconStyle: React.CSSProperties = {
    marginTop: "0.375rem",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row-reverse",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={itemStyle}>
          <div style={textStyle}>Home</div>
          <Link style={linkStyle} href="/#">
            Services
          </Link>
          <Link style={linkStyle} href="/#">
            Products
          </Link>
          <Link style={linkStyle} href="/#">
            About Us
          </Link>
          <Link style={linkStyle} href="/#">
            Pricing
          </Link>
          <Link style={linkStyle} href="/#">
            Partners
          </Link>
        </div>

        <div style={itemStyle}>
          <div style={textStyle}>User</div>
          <Link style={linkStyle} href="/#">
            Sign in
          </Link>
          <Link style={linkStyle} href="/#">
            New Account
          </Link>
          <Link style={linkStyle} href="/#">
            Demo
          </Link>
          <Link style={linkStyle} href="/#">
            Career
          </Link>
          <Link style={linkStyle} href="/#">
            Surveys
          </Link>
        </div>

        <div style={itemStyle}>
          <div style={textStyle}>Resources</div>
          <Link style={linkStyle} href="/#">
            Documentation
          </Link>
          <Link style={linkStyle} href="/#">
            Tutorials
          </Link>
          <Link style={linkStyle} href="/#">
            Take a part
          </Link>
          <Link style={linkStyle} href="/#">
            Support
          </Link>
        </div>

        <div style={itemStyle}>
          <div style={textStyle}>Product</div>
          <Link style={linkStyle} href="/#">
            Our Products
          </Link>
          <Link style={linkStyle} href="/#">
            Great Deals
          </Link>
          <Link style={linkStyle} href="/#">
            Analytics
          </Link>
          <Link style={linkStyle} href="/#">
            Active contest
          </Link>
        </div>

        <div style={itemStyle}>
          <div style={textStyle}>Support</div>
          <Link style={linkStyle} href="/#">
            Help Center
          </Link>
          <Link style={linkStyle} href="/#">
            Privacy Policy
          </Link>
          <Link style={linkStyle} href="/#">
            Conditions
          </Link>
          <Link style={linkStyle} href="/#">
            FAQ
          </Link>
        </div>

        <div style={itemStyle}>
          <div style={textStyle}>Contact us</div>
          <Link style={linkStyle} href="/#">
            85 MM Hossain Road, Kushtia
          </Link>
          <Link style={linkStyle} href="/#">
            Khulna, Bangladesh - 7000
          </Link>
          <Link style={linkStyle} href="mailto:community@ecoysoft.com">
            community@ecoysoft.com
          </Link>
          <Link style={linkStyle} href="mailto:support@ecoysoft.com">
            support@ecoysoft.com
          </Link>
          <Link style={linkStyle} href="tel:+8801937270044">
            +8801937270044
          </Link>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <div style={{ marginTop: "0.375rem", textAlign: "center" }}>
          © Copyright ecoysoft environment Inc 2024. All Rights Reserved.
        </div>
        <div style={socialIconStyle}>
          <Link
            href="https://x.com/ecoysoft"
            target="_blank"
            style={{ width: "1.5rem", marginLeft: "0.25rem" }}
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://facebook.com/ecoysoft"
            target="_blank"
            style={{ width: "1.5rem", marginLeft: "0.25rem" }}
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://instagram.com/ecoysoft"
            target="_blank"
            style={{ width: "1.5rem", marginLeft: "0.25rem" }}
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com/company/ecoysoft"
            target="_blank"
            style={{ width: "1.5rem", marginLeft: "0.25rem" }}
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://youtube.com/ecoysoft"
            target="_blank"
            style={{ width: "1.5rem", marginLeft: "0.25rem" }}
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://github.com/ecoysoft"
            target="_blank"
            style={{ width: "1.5rem", marginLeft: "0.25rem" }}
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
