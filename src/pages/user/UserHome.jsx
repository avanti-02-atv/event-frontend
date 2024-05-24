import UserHeader from "../../components/User/header/UserHeader";
import UserFooter from "../../components/User/Footer/UserFooter";
import UserBody from "../../components/User/body/UserBody";

export default function UserHome() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <UserHeader />
            <div className="bg-neutral-100 flex-grow flex flex-col justify-center items-center">
                <UserBody />
            </div>
            <UserFooter />
        </div>
    )
}
