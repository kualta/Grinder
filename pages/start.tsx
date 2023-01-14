import Layout from "@/components/layout";
import Link from "next/link";

const Start = () => {
    return (
        <Layout>
            <div className="flex flex-col h-screen items-center justify-center">
                <h1>Start Page.</h1>
                <h2>Refresh to go to <Link href={"/study"}>Study Hall</Link></h2>
            </div>
        </Layout>
    );
}

export default Start;