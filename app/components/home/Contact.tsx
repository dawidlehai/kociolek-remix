import type { LinksFunction } from "@remix-run/node";
import Family from "../svg/Family";
import Logo from "../svg/Logo";

import styles from "./Contact.css";

export default function Contact() {
  return (
    <>
      <hgroup className="contact__header grid--span">
        <p className="contact__subheading subheading">Kontakt</p>
        <h2 className="contact__heading heading-secondary">
          Skontaktuj się z nami, aby dowiedzieć się więcej
        </h2>
      </hgroup>
      <Family className="contact__image" />
      <div className="contact__text-group">
        <p>
          <Logo className="contact__logo" />
        </p>
        <p className="contact__company-name">
          “Kociołek” Agnieszka Tomaszewska-Le
        </p>
        <p className="contact__company-address">
          ul. Ogrody 15, 85-870 Bydgoszcz
        </p>
        <p className="contact__company-details">
          Pierwsze piętro Domu Kultury “Modraczek”
        </p>
        <p className="contact__company-nip">NIP: 9671025776</p>
        <p className="contact__company-phone">
          Numer telefonu: <a href="tel:+48721473077">+48 721 473 077</a>
        </p>
        <p className="contact__company-mail">
          Adres e-mail:
          <a href="mailto:kociolekbydgoszcz@gmail.com?subject=Wiadomość%20ze%20strony%20kociolekbydgoszcz.pl">
            kociolekbydgoszcz@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
