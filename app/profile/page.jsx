import { getServerSession } from "next-auth";
import Profile from "@/components/Profile";
import User from "@/models/user";
import Prompt from "@/models/prompt";

const MyProfile = async () => {
  const session = await getServerSession();
  let user = null;
  let posts = null;
  if (session) user = await User.findOne({ email: session.user.email });
  if (user) posts = await getData(user._id);
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
    />
  )
};

export default MyProfile;

const getData = async (userId) => {
  return Prompt.find({
    creator: userId,
  }).populate("creator");
}
