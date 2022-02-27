import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.digiswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://digiswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.digiswap.finance/contact-us/telegram",
      },
      {
        label: "DIGIS",
        href: "https://docs.digiswap.finance/tokenomics/digis",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.digiswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.digiswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.digiswap.finance/get-started",
      },
	  {
        label: "Github",
        href: "https://github.com/DigiSwap-Core",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Documentation",
        href: "https://docs.digiswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.digiswap.finance/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.digiswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.digiswap.finance/hiring/become-a-crew",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/DigiSwap_Official",
  },
  {
    label: "Telegram",
    icon: "Telegram",
	href: "https://t.me/DigiSwap_Official",
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/DigiSwap_Official",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/DigiSwap_Official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/DigiSwap-Core/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
