import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Dicover & Share</h1>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        <p className="descr text-center">Promptopia is an open source AI prompting
            tool for modern wolrd to discover, create and 
            share creative prompts
        </p>
        <Feed />
    </section>
  )
}

export default Home