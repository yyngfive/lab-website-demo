import { SmallHeader } from "@/components/Header";
import Catalog from "@/components/Catalog";
export default function Layout({ children }) {

    const content = [{id:'heading-1',name:'示例1'},{id:'heading-2',name:'示例2'},{id:'heading-3',name:'示例3'},]

    return (
        <div>
            <SmallHeader title={"团队成员"} />
            <div className="md:container mx-auto lg:w-2/3 flex">
                <div className="flex-initial">
                    <Catalog title={"团队成员"} content={content}/>
                </div>
                <div className="flex-1 ml-10">{children}</div>

            </div>

        </div>
    );
}