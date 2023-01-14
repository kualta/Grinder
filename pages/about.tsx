import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <Layout>

            {/* Hero */}
            <div className="hero grow bg-base-200">
                <div className="hero-content min-w-max flex-col lg:flex-row space-x-10">
                    <div className="artboard phone-1 bg-base-300"></div>
                    <div className="text-left p-8 min-w-fit">
                        <p className="text-2xl">{`You don't know and speak a language by memorising it in discrete pieces.`}</p>
                        <p className="text-2xl">{`You know and speak a language by having a highly interconnected model of the language as a whole.`}</p>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className="hero grow bg-base-200">
                <div className="hero-content flex-col lg:flex-row space-x-10">
                    {/* Title */}
                    <div className="text-center p-8 min-w-fit">
                        <p className="text-2xl py-6">{`You don't know and speak a language by memorising it in discrete pieces.`}</p>
                    </div>
                </div>
            </div>

            <Link href={"/start"} className='btn btn-block btn-lg btn-primary'>START NOW</Link>

        </Layout>
    );
}

export default About;