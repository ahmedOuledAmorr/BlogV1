//Automating Context Creation with createDataContext.js File '''without Redux''' 
import createDataContext from "./createDataContext";


const blogReducer=(state,action)=>{

    switch (action.type){
        case 'edit_blogPost':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id ? action.payload :blogPost;
                
            })
        case 'delete_blogPost':
            return state.filter((blogPost)=>blogPost.id!==action.payload)
        case 'add_blogPost':
        return [...state,{id:Math.floor(Math.random()*9999),title:action.payload.title,content:action.payload.content}];
        default:
            return state;
    }
    
}

const addBlogPost=dispatch=>{
    return (title,content,callback)=>{
    dispatch({type:'add_blogPost',payload:{title,content}});
    if (callback){
        callback();
    }
}}
const deleteBlogPost=dispatch=>{
    return (id)=>{
    dispatch({type:'delete_blogPost',payload:id});
}}

const editBlogPost=dispatch=>{
    return (id,title,content,callback)=>{
        dispatch({
            type:'edit_blogPost',
            payload:{id,title,content}
        })
        if (callback){
            callback();
        }    
    }
}

 

export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost},[]);






















//this is useReducer hook :
// import React,{useReducer} from "react";

// const BlogContext=React.createContext();


// const blogReducer=(state,action)=>{

//     switch (action.type){
//         case 'add_blogPost':
//         return [...state,{title:`Blog Post #"${state.length+1}"`}];
//         default:
//             return state;
//     }
    
// }

// export const BlogProvider=({children})=>{
//     const [blogPosts,dispatch]=useReducer(blogReducer,[]);

//     const addBlogPost=()=>{
//         dispatch({type:'add_blogPost'});
//     }

//     return <BlogContext.Provider value ={{data:blogPosts,addBlogPost}}>{children}</BlogContext.Provider>
// }

// export default BlogContext;










//////////////////////////////////////////////////////////////////////////////////
//this is useState hook :
// import React,{useState} from "react";

// const BlogContext=React.createContext();

// export const BlogProvider=({children})=>{
//     const [blogPosts,setBlogPosts]=useState([]);



//      const addBlogPost=()=>{setBlogPosts([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])}
    
//     return <BlogContext.Provider value ={{data:blogPosts,addBlogPost}}>{children}</BlogContext.Provider>
// }

// export default BlogContext;