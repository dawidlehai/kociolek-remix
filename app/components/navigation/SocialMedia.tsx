import { FacebookLogo, GoogleLogo } from "phosphor-react";

export default function SocialMedia() {
  return (
    <address className="social">
      Znajdź nas na{" "}
      <a
        href="https://www.facebook.com/kociolekbydgoszcz"
        className="social__link">
        <FacebookLogo weight="fill" size="2rem" /> Facebooku
      </a>{" "}
      oraz{" "}
      <a
        href="https://www.google.com/maps/place/Kocio%C5%82ek+-+Agnieszka+Tomaszewska-Le/@53.1122481,18.0315353,17z/data=!3m1!4b1!4m6!3m5!1s0x470313031b9c823f:0x4841d8b74f0165b0!8m2!3d53.1122449!4d18.033724!16s%2Fg%2F11jt268vy2"
        className="social__link">
        <GoogleLogo weight="fill" size="2rem" /> Google
      </a>
    </address>
  );
}
