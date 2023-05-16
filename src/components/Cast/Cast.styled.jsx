import styled from '@emotion/styled';

export const CastMemberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const CastMember = styled.div`
  background-color: var(--color-primary);
  border-radius: 10px;
  position: relative;
`;

export const CastMemberPhoto = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CastMemberInfo = styled.div`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background-color: #01000adb;
  backdrop-filter: blur(15px);
`;

export const CastMemberName = styled.h2`
  font-size: 20px;
`;
