import Image from "next/image";
import tick from "@/utils/assets/icons/tick.svg";
import copy from "@/utils/assets/icons/copy.svg";

const PromptCard = async ({ post, handleTagClick, handleEdit, handleDelete, user }) => {
  return (
    <div className="prompt_card">
      <div className="flex-col justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          {post.creator?.image !== undefined && (
            <Image
              src={post.creator.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          )}

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator?.email}
            </p>
          </div>

          <div className="copy_btn">
            <Image
              src={copy}
              alt="Image"
              width={12}
              height={12}
            />
          </div>
        </div>
        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          // onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>

        {/* {user?._id.toString()=== post?.creator?._id &&
          pathName === "/profile" && (
            <div className="mt-5 flex-center gap-5 border-top border-gray-100 pt-3">
              <p
                className="font-inter text-sm green_gradient cursor-pointer"
                onClick={handleEdit}
              >
                Edit
              </p>
              <p
                className="font-inter text-sm green_gradient cursor-pointer"
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
          )} */}
      </div>
    </div>
  );
};

export default PromptCard;
