import { getServerSession } from "next-auth";
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import Feed from "@/components/Feed";
import Prompt from "@/models/prompt";

export default async function Home() {
  await connectToDB();
  const data = await getData()
  const session = await getServerSession();
  let user = null;
  if (session) {
    user = await User.findOne({ email: session.user.email });
  }
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center block">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      {/* feed */}
      <Feed prompt={data} user={user} />
    </section>
  );
}

async function getData() {
  return Prompt.find({}).populate("creator");
}
