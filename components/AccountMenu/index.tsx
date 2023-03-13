import React from 'react'
import { signOut } from 'next-auth/react';

interface AccountMenuP {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuP> = ({
  visible
}) => {
  return visible? (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img src="/images/default-blue.png" alt="profile" className='w-8 rounded-md' />
          <p className='text-white text-sm group-hover/item:underline' >
            Username
          </p>
        </div>
        
        <hr className='bg-gray-600 border-0 h-px my-4' />

        <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
          Sign out of Netflix
        </div>
      </div>
    </div>
  ) : null
}

export default AccountMenu