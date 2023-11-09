import styled from "styled-components";

import { BsPencilFill } from "react-icons/bs";

const ProfileInfoWrap = styled.div`
  width: 1200px;

  padding: 90px 75px 36px 150px;

  margin-bottom: 96px;
`;
const ProfileInfoImgWrap = styled.div`
  position: relative;

  margin-bottom: 20px;
`;
const ProfileInfoImg = styled.div`
  width: 154px;
  height: 154px;

  border-radius: 50%;

  background-image: url("https://images.pexels.com/photos/18968296/pexels-photo-18968296.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ProfileInfoEditBtn = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid #bfbfbf;

  position: absolute;
  left: 110px;
  bottom: 0;

  cursor: pointer;
  background-color: #fff;
`;
const ProfileInfoContents = styled.div`
  width: 100%;

  padding: 16px 0px;
`;
const ProfileInfoUserNameWrap = styled.div`
  font-size: 16px;
  font-weight: bold;

  margin-bottom: 16px;
`;
const ProfileInfoUserIntroWrap = styled.div`
  font-size: 14px;

  margin-bottom: 24px;
`;
const ProfileInfoUserTagsWrap = styled.div`
  button {
    margin-right: 10px;
  }
`;
const Tag = styled.span`
  padding: 3px 9px;

  text-align: center;

  border-radius: 15px;

  background-color: #ebebeb;

  font-size: 12px;
  color: #464646;
`;

function ProfileInfo() {
  return (
    <ProfileInfoWrap>
      <ProfileInfoImgWrap>
        <ProfileInfoImg>
          <ProfileInfoEditBtn>
            <BsPencilFill color="#BEBEBE" />
          </ProfileInfoEditBtn>
        </ProfileInfoImg>
      </ProfileInfoImgWrap>
      <ProfileInfoContents>
        <ProfileInfoUserNameWrap>
          <span>user.name</span>
        </ProfileInfoUserNameWrap>
        <ProfileInfoUserIntroWrap>
          <span>user.introText</span>
        </ProfileInfoUserIntroWrap>
        <ProfileInfoUserTagsWrap>
          <Tag>전시</Tag>
        </ProfileInfoUserTagsWrap>
      </ProfileInfoContents>
    </ProfileInfoWrap>
  );
}

export default ProfileInfo;
