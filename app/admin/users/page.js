'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import Left from "@/app/component/Left"


function User() {

    return (
        <>
            <div className='flex flex-col lg:flex-row m-4'>

                <Left />

                <div className='flex flex-col w-full px-4 mt-4'>
                    <div>
                        <header className="flex justify-between">
                            <div>
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbPage className='font-semibold text-white'>Home</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                            <div className="flex items-center gap-2">
                                <Input type="search" placeholder="Search" className='w-72 border-zinc-900' />
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </header>
                    </div>
                    <h2 className='text-center text-4xl font-semibold my-4'>User Page</h2>
                </div>
            </div>
        </>

    );
}

export default User;