import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

type TParams = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, { params }: TParams) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (err) {
    return new Response("Failed to fetch all prompts", {
      status: 500,
    });
  }
};
