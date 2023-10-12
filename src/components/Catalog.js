
import Link from "next/link";

export default function Catalog({ title, content }) {

    return (
        <>
            <ul className="menu bg-base-200 w-56 mt-10 menu-lg [&_li>*]:rounded-none p-0 sticky top-10">
                <li className="menu-title text-xl bg-primary text-base-100">{title}</li>
                {content.map((e, i) => [
                    <li key={i}><Link href={`#${e.id}`}>{e.name}</Link></li>
                ])}
            </ul>
        </>
    );
}