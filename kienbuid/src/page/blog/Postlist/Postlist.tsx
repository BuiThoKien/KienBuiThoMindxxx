import { RootState, useAppDispatch } from "../../../store/store";
import PostItem from "../PostItem";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostList } from "../blog.slice";
import { useEffect } from "react";

export default function PostList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(getPostList());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const { postList } = useSelector((state: RootState) => state.blog);
  console.log(postList);
  const handleDelete = (postId: string) => {
    dispatch(deletePost(postId));
  };
  // const handleStartediting = (postId: string) => {
  //   dispatch(startEditingPost(postId));
  // };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            NVT Blog
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ.
            Nhưng ngày mốt sẽ có nắng
          </p>
        </div>
       
      </div>
    </div>
  );
}
