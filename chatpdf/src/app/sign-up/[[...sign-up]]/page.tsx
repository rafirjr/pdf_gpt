import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="absolute  left-1/3 top-1/2 -translate-y-1/2">
            <SignUp />
        </div>
    );
}
