import { useDispatch } from "react-redux";
import { setVideoPostData,getVideo } from "./videoReducer";

export default function PostData(){
    const dispatch = useDispatch();
    const handlePost = () =>{
        dispatch(setVideoPostData({
            "title": "string",
            "isPublic": true,
            "isCopyright": true,
            "thumbnailStorageId": 0,
            "thumbnailPath": "string",
            "thumbnailFileName": "string",
            "gameId": 0,
            "homeTeam": "string",
            "homeTeamId": "string",
            "awayTeam": "string",
            "awayTeamId": "string",
            "fileIds": [
              0
            ],
            "hashtags": [
              "string"
            ],
            "categoryId": 0,
            "duration": "string",
            "videos": [
              0
            ]
          }));
    }
    const handleGet = () =>{
        dispatch(getVideo(3));
    }
    return(
        <>
            <h1>Redux-Saga Post Flow Test</h1>
            <button onClick={handleGet}>get 요청 날리기</button>
            <button onClick={handlePost}>post 요청 날리기</button>
        </>
    )
}