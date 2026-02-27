import { Navbar as Navhero, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownMenu, DropdownItem, DropdownTrigger, Dropdown, Avatar } from "@heroui/react";
import { Crown } from "lucide-react";
import { useContext } from "react";
import { Link as Linkreact, useNavigate } from 'react-router';
import { Authcontext } from "../../../context/Authcontext";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navbar() {
  const { userToken, removeUserToken,userId } = useContext(Authcontext)
  const Navigate = useNavigate()
  function LogoutHandel() {
    removeUserToken()
    Navigate("/login")
  }

  return (
    <Navhero shouldHideOnScroll className="rounded-4xl">
      <NavbarBrand as={Linkreact} to={"/"}>

        <Crown className="w-5 h-7 ml-1 text-gold space-x-1 " />
        <span className="font-display text-lg font-bold text-gradient-gold">PHARAOH</span>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent as="div" justify="center">
        {userToken ? (
          <Dropdown placement="bottom">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="warning"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem as={Linkreact} to={`/profile/${userId}`} key="user_profile">profile</DropdownItem>

              <DropdownItem key="logout" color="danger" onClick={LogoutHandel}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>) : (

          <>
            <NavbarItem className=" lg:flex">
              <Linkreact to={"/login"}>Login</Linkreact>
            </NavbarItem>
            <NavbarItem>
              <Button as={Linkreact} color="warning" to={"/register"} variant="flat">
                sign-up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

    </Navhero>
  );
}
