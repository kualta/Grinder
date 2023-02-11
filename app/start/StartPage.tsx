import Link from "next/link";

const StartPage = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1>Start Page.</h1>
            <h2>go to <Link href={"/study"}>Study Hall</Link> for now</h2>
        </div>
    );
}

export default StartPage;