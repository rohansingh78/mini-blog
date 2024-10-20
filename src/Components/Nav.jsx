// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
// import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../icons/Icons.jsx";
// import {AcmeLogo} from "../icons/AcmeLogo.jsx";

// export default function App() {
//   const icons = {
//     chevron: <ChevronDown fill="currentColor" size={16} />,
//     scale: <Scale className="text-warning" fill="currentColor" size={30} />,
//     lock: <Lock className="text-success" fill="currentColor" size={30} />,
//     activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
//     flash: <Flash className="text-primary" fill="currentColor" size={30} />,
//     server: <Server className="text-success" fill="currentColor" size={30} />,
//     user: <TagUser className="text-danger" fill="currentColor" size={30} />,
//   };

//   return (
//     <Navbar>
//       <NavbarBrand>
//         <AcmeLogo />
//         <p className="font-bold text-inherit">BLOG</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <Dropdown>
//           <NavbarItem>
//             <DropdownTrigger>
//               <Button
//                 disableRipple
//                 className="p-0 bg-transparent data-[hover=true]:bg-transparent"
//                 endContent={icons.chevron}
//                 radius="sm"
//                 variant="light"
//               >
//                 Features
//               </Button>
//             </DropdownTrigger>
//           </NavbarItem>
//           <DropdownMenu
//             aria-label="ACME features"
//             className="w-[340px]"
//             itemClasses={{
//               base: "gap-4",
//             }}
//           >
//             <DropdownItem
//               key="autoscaling"
//               description="ACME scales apps to meet user demand, automagically, based on load."
//               startContent={icons.scale}
//             >
//               Autoscaling
//             </DropdownItem>
//             <DropdownItem
//               key="usage_metrics"
//               description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
//               startContent={icons.activity}
//             >
//               Usage Metrics
//             </DropdownItem>
//             <DropdownItem
//               key="production_ready"
//               description="ACME runs on ACME, join us and others serving requests at web scale."
//               startContent={icons.flash}
//             >
//               Production Ready
//             </DropdownItem>
//             <DropdownItem
//               key="99_uptime"
//               description="Applications stay on the grid with high availability and high uptime guarantees."
//               startContent={icons.server}
//             >
//               +99% Uptime
//             </DropdownItem>
//             <DropdownItem
//               key="supreme_support"
//               description="Overcome any challenge with a supporting team ready to respond."
//               startContent={icons.user}
//             >
//               +Supreme Support
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Input } from "@nextui-org/react";
import { AcmeLogo } from "../icons/AcmeLogo.jsx";
import { Search } from "react-feather";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={() => setIsSearchOpen(!isSearchOpen)} auto flat>
            <Search size={20} />
          </Button>
        </NavbarItem>
        {isSearchOpen && (
          <NavbarItem className="hidden sm:flex">
            <Input placeholder="Search..." className="w-64" autoFocus />
          </NavbarItem>
        )}
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
