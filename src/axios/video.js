import instance from './index';

export const getMediaList = async () =>{
    const response = await instance.get(
        `/video/content/list`,
    );
    return response.data.content;
}

export const getMedia = async (cid) =>{
    const response = await instance.get(
        `/video/content/${cid}`,
    );
    return response.data;
}

export const postVideo = async (videoContent)=>{
    const response = await instance.post(
        `/video/content`,
        JSON.stringify(videoContent),
        {
            headers:{
                "Content-Type": "application/json",
            }
        }
    );
    return response.data;
}