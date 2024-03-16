import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <>
      {isDesktop ? (
        <header className="w-full bg-[#F7F8F6] fixed left-0 top-0 z-10 h-[10vh] flex items-center">
          <nav className="flex w-full items-center justify-between px-5">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Investors */}
                <NavigationMenuItem>
                  <Link href="/investors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Investors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Startups */}
                <NavigationMenuItem>
                  <Link href="/investors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Startups
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link href="/investors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <Link href="/investors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Link href="/auth/sign-in">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button>Create Account</Button>
              </Link>
            </div>
          </nav>
        </header>
      ) : (
        <div className="w-full h-full bg-white">
          <Drawer direction="right">
            <DrawerTrigger className="relative top-0 right-[-86%] px-4 py-8">
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <nav className="flex w-full flex-col px-5 ">
                <NavigationMenu>
                  <NavigationMenuList className="flex w-full flex-col justify-center items-center ml-[3.7rem] mt-4">
                    {/* Home */}
                    <NavigationMenuItem className="mt-4">
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    {/* Investors */}
                    <NavigationMenuItem className="mt-4">
                      <Link href="/investors" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Investors
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    {/* Startups */}
                    <NavigationMenuItem className="mt-4">
                      <Link href="/investors" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Startups
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    {/* Pricing */}
                    <NavigationMenuItem className="mt-4">
                      <Link href="/investors" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Pricing
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    {/* Services */}
                    <NavigationMenuItem className="mt-4">
                      <Link href="/investors" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Services
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="flex w-full flex-col justify-center items-center mt-4 mr-4 ">
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
