import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { ThemeContext } from "../../../App";
import { darkTheme } from "../../../style/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 128px;
  margin-bottom: 32px;
  .commentContainer {
    display: flex;
  }
  .commentContentWrap {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    gap: 24px;

    padding-top: 16px;

    font-size: 18px;

    .name span {
      color: ${({ theme }) => (theme === darkTheme ? "white" : "black")};
      font-weight: 600;
      cursor: pointer;
    }
    .text span {
      color: ${({ theme }) => (theme === darkTheme ? "#dedede" : "#3e3e3e")};
    }
    .timeStamp span {
      color: #999696;
      font-size: 16px;
    }
  }
  input {
    width: 600px;
    height: 50px;
    border: none;
    border-radius: 24px;

    padding: 0px 16px;
    margin-right: 32px;

    font-family: "Pretendard";
  }
  input:focus {
    outline: none;
  }
  .buttonWrap {
    margin-top: 16px;

    button {
      width: 48px;
      margin-right: 16px;

      border: none;
      border-radius: 8px;

      cursor: pointer;
    }
  }
`;

interface feed {
  id: string;
  feedId: number;
  feedImageUrl: string;
  contentText: string;
  likes: number;
  timeStamp: string;
  commentList?: object;
}
interface feedData {
  [key: string]: feed;
}
interface userData {
  id: string;
  name: string;
  profileImgUrl: string;
  backgroundImgUrl: string;
  introText: string;
  hobby: string[];
}
interface allUserData {
  [key: string]: userData;
}
export default function ProfileFeedComment(props: {
  feedData: feedData | null;
  comment: {
    id: string;
    name: string;
    text: string;
    timeStamp: string;
  };
  index: number | null;
  loginId: string | null;
  allUserData: allUserData;
  handleEditComment: (commentId: string, newText: string) => void;
  handleDeleteComment: (commentId: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.comment.text);
  const navigate = useNavigate();
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const { theme } = useContext(ThemeContext);

  const handleSaveClick = () => {
    props.handleEditComment(`${props.index}`, editedText);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    props.handleDeleteComment(`${props.index}`);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <Container theme={theme}>
      <div className="commentContainer">
        <div
          className="userProfile"
          style={{
            backgroundImage: `url(${
              props.allUserData[props.comment.id].profileImgUrl
            })`
          }}
        ></div>
        {isEditing ? (
          <input type="text" value={editedText} onChange={handleTextChange} />
        ) : (
          <div className="commentContentWrap">
            <div className="name">
              <span
                onClick={() => {
                  navigate(`/profiles/${props.comment.id}`);
                }}
              >
                {props.comment.name}
              </span>
            </div>
            <div className="text">
              <span>{props.comment.text}</span>
            </div>
            <div className="timeStamp">
              <span>{props.comment.timeStamp}</span>
            </div>
          </div>
        )}
      </div>
      {props.loginId == props.comment.id ? (
        <div className="buttonWrap">
          {isEditing ? (
            <button onClick={handleSaveClick}>저장</button>
          ) : (
            <button onClick={handleEditClick}>수정</button>
          )}
          <button onClick={handleDeleteClick}>삭제</button>
        </div>
      ) : null}
    </Container>
  );
}