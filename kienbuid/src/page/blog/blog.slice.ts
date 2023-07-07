import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../type/blog.type.ts";
// import { initialPostlist } from "../../contants/blog";
import http from "../../ultils/http.ts";

interface BlogSlice {
  postList: Post[];
  editingPost: Post | null;
}

const initialState: BlogSlice = {
  postList: [],
  editingPost: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const post = action.payload;
      state.postList.push(post);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const DeletePostId = state.postList.findIndex(
        (post) => post.id === postId
      );
      if (DeletePostId !== -1) {
        state.postList.splice(DeletePostId, 1);
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const editwithPostId =
        state.postList.find((post) => post.id === postId) || null;
      state.editingPost = editwithPostId;
    },
    finishEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const editwithPostId =
        state.postList.find((post) => post.id === postId) || null;
      state.editingPost = editwithPostId;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(getPostList.fulfilled, (state, action)=>{
      state.postList = action.payload;
    })

    .addCase(addPost.fulfilled, (state, action) =>{
      state.postList.push(action.payload);
    })

    .addCase(deletePost.fulfilled, (state, action) =>{
     const postId = action.meta.arg;
      const index = state.postList.findIndex((post) => post.id === postId);
      if (index !== -1){
        state.postList.slice(index , 1 );
      }
    })

    .addCase(finishingEditPost.fullfilled, (state, action) => {
      


      state.postList.find((post,))

    })
  

  },
});

export const { startEditingPost} = blogSlice.actions

const blogReducer = blogSlice.reducer;

export default blogReducer;

export const getPostList = createAsyncThunk(
  "blog/getPostlist",
  async (_, thunkAPI) => {
    const response = await http.get<Post[]>("post", {
      signal: thunkAPI.signal,
    });
    return response?.data;
  }
);


export const addPost = createAsyncThunk(
  "blog/addPost", async(body: Post, thunkAPI) => {
    const response = await http.post<Post>("post", body, {
      signal: thunkAPI.signal,
    });

    return response.data;
   

}
);
 
export const deletePost = createAsyncThunk(
  "blog/addPost", async(body: Post, thunkAPI) => {
    const response = await http.post<Post>("post", body, {
      signal: thunkAPI.signal,
    });

    return response.data;
   

}
);
 
 
export const finishEditingPost = createAsyncThunk(
  "blog/finishEditingPost", async(body: Post, thunkAPI) => {
    const response = await http.post<Post>("post", body, {
      signal: thunkAPI.signal,
    });

    return response.data;
   

}
);
 

