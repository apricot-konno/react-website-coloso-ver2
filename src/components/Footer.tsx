import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import FooterSection from "./layout/FooterSection";
import { CONTACT_INFO, QUICK_LINKS, SOCIAL_ICONS } from "../data/footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <footer className="mt-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto px-4"
      >
        <div className="md:flex justify-between">
          <FooterSection title="React Website">
            <p className="">
              Making high impact investments that transform lives.
            </p>
          </FooterSection>
          <FooterSection title="Quick Links">
            <ul className="flex flex-col gap-1">
              {QUICK_LINKS.map(
                (
                  link: {
                    href: string | undefined;
                    label:
                      | string
                      | number
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<unknown>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-slate-500 duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </FooterSection>
          <FooterSection title="Contact Us">
            {CONTACT_INFO.map((info, index) => (
              <p key={index}>
                {info.label}: {info.value}
              </p>
            ))}
          </FooterSection>
          <FooterSection title="Social Media">
            <div className="flex gap-4">
              {SOCIAL_ICONS.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="text-gray-800 dark:text-black hover:text-gray-600 duration-150"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </FooterSection>
        </div>

        <div className="mt-5 border-t border-gray-700 pt-4 text-sm text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} React Website. All rights
            reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
