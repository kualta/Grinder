import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <Layout>

            <div className="text-xl">
                {/* Hero 1 */}
                <div className="hero grow bg-base-200">
                    <div className="hero-content flex-col lg:flex-row space-x-10">
                        <div className="card">
                            <div className="artboard artboard-horizontal phone-1 bg-base-300"></div>
                        </div>
                        <div className="text-left p-8">
                            <p className="text-2xl">{`You don't know and speak a language by memorising it in discrete pieces.`}</p>
                            <br />
                            <p className="text-2xl">{`You know and speak a language by having a highly interconnected model of the language as a whole.`}</p>
                        </div>
                    </div>
                </div>

                {/* Hero 2 */}
                <div className="hero grow bg-base-200">
                    <div className="hero-content flex-col lg:flex-row space-x-10">
                        <div className="text-left p-8">
                            <p className="text-2xl">
                                {`When you learn with discrete items, you limit the opportunities to build those essential links between all the different aspects of the language.`}
                            </p>
                            <br />
                        </div>
                        <div className="card">
                            <div className="artboard artboard-horizontal phone-1 bg-base-300"></div>
                        </div>
                    </div>
                </div>

                {/* Hero 3 */}
                <div className="hero grow bg-base-200">
                    <div className="hero-content flex-col lg:flex-row space-x-10">
                        <div className="text-center p-8 min-w-fit">
                            <p className="text-2xl">
                                {`Sentences demonstrate the associations between the words they contain (collocation), 
                            they show how the words relate to the grammar and structure of the sentence, 
                            and they dramatically increase your opportunities to link your language knowledge together.`}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero 4 */}
                <div className="hero grow bg-base-200">
                    <div className="hero-content flex-col lg:flex-row space-x-10">
                        <div className="card">
                            <Link href={"/start"} className='btn btn-block btn-lg btn-primary'>START NOW</Link>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    );
}

export default About;