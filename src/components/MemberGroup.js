import Image from "next/image";
import photo1 from "../../public/images/photo-1635805737707-575885ab0820.jpg";

export default function MemberGroup({ children, title,id }) {

    return (
        <div className="mt-10 mb-5" id={id}>
            <div className=""><h1 className="text-4xl font-sans font-bold">{title}</h1></div>
            <div className="divider"></div>
            <div className="grid grid-cols-2 gap-5">{children}</div>
        </div>
    );
}

export function MemberCard({ photo, name, email, info }) {

    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl h-60">
                <figure className=""><Image src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" width={250} height={500} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="w-full flex flex-col">


                        <span className="flex flex-row break-all"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </span >{info}</span>
                        <span className="break-all flex flex-row"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        </span>{email}</span >
                    </div>

                </div>
            </div>
        </>
    );
}