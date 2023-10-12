import MemberGroup from "@/components/MemberGroup";
import { MemberCard } from "@/components/MemberGroup";
export default function Members() {
    return (
        <div className="">
            <MemberGroup title={"示例1"} id="heading-1">
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
            </MemberGroup>
            <MemberGroup title={"示例2"} id="heading-2">
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
                <MemberCard name={"张三三"} info={"test"} email={"222222222@2222.com"} />
            </MemberGroup>
        </div>
    );
}