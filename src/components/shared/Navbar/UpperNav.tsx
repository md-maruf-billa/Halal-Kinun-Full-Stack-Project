import { MapPin } from 'lucide-react';
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

const UpperNav = () => {
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

                              <Button className='bg-[#2388ff]'>Sign Up</Button>
                              <Button>Sign In</Button>
                        </div>

                  </div>
            </div>
      );
};

export default UpperNav;