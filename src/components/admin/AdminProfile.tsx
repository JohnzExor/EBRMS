import {
  ArrowBigLeft,
  Home,
  LogOut,
  Paperclip,
  Settings,
  User2Icon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiDocument } from "react-icons/hi2";

const AdminProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="flex flex-col items-center -space-y-2">
          <div className="flex items-center gap-2 font-medium">
            <Avatar>
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            jimenojohnzyll@gmail.com
            <IoIosArrowDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/admin/">
            <DropdownMenuItem>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/admin/reports/">
            <DropdownMenuItem>
              <Paperclip className="mr-2 h-4 w-4" />
              <span>Reports</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/admin/manageusers/">
            <DropdownMenuItem>
              <User2Icon className="mr-2 h-4 w-4" />
              <span>Manage Users</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/">
            <DropdownMenuItem>
              <ArrowBigLeft className="mr-2 h-4 w-4" />
              <span>Go Back</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link to="/settings">
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminProfile;
