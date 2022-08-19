import React, {useState} from "react";

const UserAuthorityList=[
    {text:'동영상 다운로드', value:'videoDownAccess'},
    {text:'갤러리 다운로드', value:'imageDownAccess'},
    {text:'저작권 리스트',value:'copyrightListAccess'},
    {text:'저작권 상세페이지',value:'copyrightDetailAccess'},
    {text:'라이브 상세페이지',value:'liveDetailAccess'},
    {text:'KFA경기 상세페이지',value:'kfaPlayDetailAccess'},
    {text:'KFA일반 상세페이지',value:'kfaNormalDetailAccess'},
    {text:'경기기록 상세페이지',value:'kfaEventDetailAccess'},
    {text:'인사이드캠 상세페이지',value:'insidecamDetailAccess'},
    {text:'갤러리 상세페이지',value:'galleryDetailAccess'},
];

function UserAuthManageTable({userAuthData}) {
    const [state, setState] = useState(userAuthData)

    const handleCheckBoxChange = (e, index, access) => {
        state[index][access] = Number(e.target.checked);
        setState([
            ...state
        ]);
    };

    return (
        <table border={1}>
            <colgroup>
                <col width="5%"/>
            </colgroup>
            <thead className="thead">
            <tr>
                <th>번호</th>
                <th>메뉴명</th>
                <th>Level1</th>
                <th>Level2</th>
                <th>Level3</th>
                <th>Level4</th>
            </tr>
            </thead>
            <tbody>
            {
                UserAuthorityList.map((item, index) => (
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{item.text}</td>
                        <td><input type="checkbox" defaultChecked={state[0][item.value]} onChange={(e)=>handleCheckBoxChange(e,0,item.value)}/>{state[0][item.value]}</td>
                        <td><input type="checkbox" defaultChecked={state[1][item.value]} onChange={(e)=>handleCheckBoxChange(e,1,item.value)}/>{state[1][item.value]}</td>
                        <td><input type="checkbox" defaultChecked={state[2][item.value]} onChange={(e)=>handleCheckBoxChange(e,2,item.value)}/>{state[2][item.value]}</td>
                        <td><input type="checkbox" defaultChecked={state[3][item.value]} onChange={(e)=>handleCheckBoxChange(e,3,item.value)}/>{state[3][item.value]}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default function Checkbox(){

    const userAuthData = [
        {
          "id": "1",
          "levelName": "level1",
          "sortSeq": "1",
          "defaultYN": "N",
          "videoDownAccess": "0",
          "imageDownAccess": "0",
          "copyrightListAccess": "0",
          "copyrightDetailAccess": "0",
          "liveDetailAccess": "1",
          "kfaPlayDetailAccess": "0",
          "kfaNormalDetailAccess": "0",
          "kfaEventDetailAccess": "0",
          "insidecamDetailAccess": "0",
          "galleryDetailAccess": "1"
        },
        {
          "id": "2",
          "levelName": "level2",
          "sortSeq": "2",
          "defaultYN": "N",
          "videoDownAccess": "0",
          "imageDownAccess": "0",
          "copyrightListAccess": "1",
          "copyrightDetailAccess": "1",
          "liveDetailAccess": "1",
          "kfaPlayDetailAccess": "0",
          "kfaNormalDetailAccess": "0",
          "kfaEventDetailAccess": "1",
          "insidecamDetailAccess": "1",
          "galleryDetailAccess": "1"
        },
        {
          "id": "3",
          "levelName": "level3",
          "sortSeq": "3",
          "defaultYN": "N",
          "videoDownAccess": "0",
          "imageDownAccess": "0",
          "copyrightListAccess": "1",
          "copyrightDetailAccess": "1",
          "liveDetailAccess": "1",
          "kfaPlayDetailAccess": "1",
          "kfaNormalDetailAccess": "1",
          "kfaEventDetailAccess": "1",
          "insidecamDetailAccess": "1",
          "galleryDetailAccess": "1"
        },
        {
          "id": "4",
          "levelName": "level4",
          "sortSeq": "4",
          "defaultYN": "N",
          "videoDownAccess": "0",
          "imageDownAccess": "0",
          "copyrightListAccess": "1",
          "copyrightDetailAccess": "1",
          "liveDetailAccess": "1",
          "kfaPlayDetailAccess": "1",
          "kfaNormalDetailAccess": "1",
          "kfaEventDetailAccess": "1",
          "insidecamDetailAccess": "1",
          "galleryDetailAccess": "1"
        }
      ]

    return(
        <>
            <UserAuthManageTable
                userAuthData={userAuthData}
            />
        </>
    );
}
