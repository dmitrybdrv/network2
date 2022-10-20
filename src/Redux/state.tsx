import {v1} from "uuid";
import {rerenderEntireThree} from "../Render";


export type SideBarType = {}
export type MessageType = {
    id: string,
    message: string
}
export type DialogsType = {
    id: string,
    name: string
}
export type PostsType = {
    id: string,
    avatar: string,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
}
export type DialogPageType = {
    dialogs: DialogsType[],
    messages: MessageType[],
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SideBarType,
}
export let state: RootStateType = {
    profilePage: {
        posts: [
            {
                id: v1(),
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                message: '..Hi, iam using this network',
                likesCount: 12
            },
            {
                id: v1(),
                avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                message: 'Its like a paranoia, looking over my back',
                likesCount: 2
            },
            {id: v1(), avatar: 'https://rubenmontes.com/wp-content/uploads/2020/04/Chris-user-profile.jpg', message: 'Go to listing some trash', likesCount: 4},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Steve Wozniak'},
            {id: v1(), name: 'Maroon Five'},
            {id: v1(), name: 'Chester Bennington'},
            {id: v1(), name: 'Lesly Nillson'},
            {id: v1(), name: 'Dr.Dre'},
            {id: v1(), name: 'Eminem'},
        ],
        messages: [
            {
                id: v1(),
                message: 'Eventually all things fall into place. Until then, laugh at the confusion, live for the moments, and know everything happens for a reason. – Albert Schweitzer'
            },
            {
                id: v1(),
                message: 'Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all. Emily Dickinson'
            },
            {id: v1(), message: 'Never stop looking up.'},
            {id: v1(), message: 'Vow to stop worrying and start loving.'},
            {id: v1(), message: 'Believe it’s possible to be at peace.'},
            {id: v1(), message: 'Embrace uncertainty. Some of the most beautiful chapters in our lives won’t have a title until much later. – BG'},
        ]
    },
    sideBar: {}
}

export let addPost = (newPostMessage: string) => {

    const newPost: PostsType = {
        id: v1(),
        avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp',
        message: newPostMessage,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    rerenderEntireThree(state)
}