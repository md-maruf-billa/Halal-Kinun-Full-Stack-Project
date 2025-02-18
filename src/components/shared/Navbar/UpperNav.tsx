"use client"
import {
      MapPin, LogOut, User, LayoutDashboard, Store,
} from 'lucide-react';
import React from 'react';
import {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logOutUser } from '@/services/authService';
import { toast } from 'sonner';
import { useUser } from '@/context/userContext';


const UpperNav = () => {
      const { user, setIsLoading } = useUser()

      const handleLogOutUser = async () => {
            const res = await logOutUser()
            if (res) {
                  toast.success("Log out successfull.")
                  setIsLoading(true)
            } else {
                  toast.error("Log out faild.")
            }
      }
      return (
            <div className='border-b py-3'>
                  <div className='container mx-auto flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                              <MapPin className='text-customGray' />
                              <p className='text-customGray'>Store Location: TTC More, Kurigram, BD</p>
                        </div>

                        <div className='flex items-center gap-4'>
                              <Select>
                                    <SelectTrigger className="w-[100px]">
                                          <SelectValue placeholder="Lang" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Select Language</SelectLabel>
                                                <SelectItem value="english">English</SelectItem>
                                                <SelectItem value="bangla">Bangla</SelectItem>
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>
                              <Select>
                                    <SelectTrigger className="w-[100px]">
                                          <SelectValue placeholder="USD" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Select Currency</SelectLabel>
                                                <SelectItem value="bdt">BDT</SelectItem>
                                                <SelectItem value="usd">USD</SelectItem>
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>

                              {user ?
                                    <>
                                          <Link href={"/create-shop"}><Button className='bg-[#2388ff]'>Create Shop</Button></Link>
                                          <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                      <Avatar className='cursor-pointer'>
                                                            <AvatarImage src="https://github.com/shadcn.png" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                      </Avatar>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-56">
                                                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                      <DropdownMenuSeparator />
                                                      <DropdownMenuGroup>
                                                            <DropdownMenuItem>
                                                                  <User />
                                                                  <span>Profile</span>
                                                                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                  <LayoutDashboard />
                                                                  <span>Dashboard</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                  <Store />
                                                                  <span>My Store</span>
                                                            </DropdownMenuItem>
                                                      </DropdownMenuGroup>
                                                      <DropdownMenuSeparator />
                                                      <DropdownMenuItem onClick={handleLogOutUser}>
                                                            <LogOut />
                                                            <span>Log out</span>
                                                      </DropdownMenuItem>
                                                </DropdownMenuContent>
                                          </DropdownMenu>
                                    </> :
                                    <Link href={"/login"}>  <Button>Login</Button></Link>
                              }
                        </div>

                  </div>
            </div>
      );
};

export default UpperNav;