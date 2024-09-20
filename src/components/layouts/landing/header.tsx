import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import LOGO from "@/assets/iconspng/LOGO.png";
import { usePathname } from "next/navigation";
import cx from "classnames"; // import a utility for combining class names

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {isDesktop ? (
        <header className="w-full bg-[#F7F8F6] left-0 top-0 z-10 flex items-center md:flex-col">
          <div className="bg-[#0F8B3A] flex w-full items-center justify-center p-[1rem]">
            <p className="text-[#FFFFFF] text-[12px]">
              We will pay you <span className="text-[#93F3A5]">$50</span> just
              for referring an eligible{" "}
              <span className="text-[#93F3A5]">Startup Founder</span> to
              SecureSeedFund
            </p>
          </div>
          <nav className="flex w-full items-center justify-between">
            <Image src={LOGO} alt="Logo" className="px-5 py-7" />
            <NavigationMenu>
              <NavigationMenuList>
                {/* Navigation Items */}
                {[
                  { href: "/", label: "Home" },
                  { href: "/investors", label: "Investors" },
                  { href: "/startups", label: "Startups" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/services", label: "Services" },
                ].map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cx(
                          "px-4 py-2 text-black text-sm font-normal transition-colors hover:text-gray-700",
                          {
                            "bg-[#93F3A5] text-black font-medium": isActive(
                              item.href
                            ),
                          }
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2 px-8">
              <Link href="/auth/sign-in">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="bg-[#241A3F]">Get started</Button>
              </Link>
            </div>
          </nav>
        </header>
      ) : (
        <div className="w-full bg-white">
          <Drawer direction="right">
            <div className="flex justify-between">
              <Image src={LOGO} alt="Logo" className="px-5 py-7" />
              <DrawerTrigger className="px-4 py-8">
                <MenuIcon />
              </DrawerTrigger>
            </div>
            <DrawerContent>
              <nav className="flex w-full flex-col px-5">
                <NavigationMenu>
                  <NavigationMenuList className="flex w-full flex-col justify-center items-center ml-[3.7rem] mt-4">
                    {/* Navigation Items for Drawer */}
                    {[
                      { href: "/", label: "Home" },
                      { href: "/investors", label: "Investors" },
                      { href: "/startups", label: "Startups" },
                      { href: "/pricing", label: "Pricing" },
                      { href: "/services", label: "Services" },
                    ].map((item) => (
                      <NavigationMenuItem key={item.href} className="mt-4">
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cx(
                              "px-4 py-2 text-black text-sm font-normal transition-colors hover:text-gray-700",
                              {
                                "bg-[#93F3A5] text-black font-medium": isActive(
                                  item.href
                                ),
                              }
                            )}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                <div className="flex w-full flex-col justify-center items-center mt-4 mr-4">
                  <Link href="/auth/sign-in">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link href="/auth/sign-up">
                    <Button className="mt-2">Create Account</Button>
                  </Link>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default Header;
