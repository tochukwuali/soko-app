import styled from "styled-components";

export const UnstyledCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 0.15rem solid #d4d4d4;
  background: #fff;
  color: #9c9c9c;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-top: -0.3rem;
`;

export const StyledCircle = styled(UnstyledCircle)`
  background: #2666ee;
  color: #fff;
  border: 1px solid #2666ee;
`;

export const UnstyledLine = styled.div`
  width: 2px;
  background: ${(props) => (props.complete1 ? "#2666ee" : "#d4d4d4")};
  position: relative;
  height: ${(props) => (props.complete1 ? "5rem" : "8.1rem")};
  left: 17px;
`;

export const UnstyledLine2 = styled(UnstyledLine)`
  width: 2px;
  background: ${(props) => (props.complete2 ? "#2666ee" : "#d4d4d4")};
  position: relative;
  height: ${(props) => (props.start2 ? "10.2rem" : "4rem")};
  left: 17px;
`;

export const PurchaseAddress = styled.div`
  display: flex;
`;

export const OldAddress = styled.div`
  border: ${(props) =>
    props.complete2 ? "1px solid #2666ee" : "1px solid #cecece"};
  border-radius: 8px;
  width: 210px;
  height: 110px;
  padding: 0.8rem;
  cursor: pointer;
`;
export const NewAddress = styled.div`
  border: 1px solid #cecece;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 110px;
  color: #2666ee;
  font-size: 0.9rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const InputButton = styled.button`
  margin-left: 1rem;
  padding: 8px 15px;
  color: ${(props) => (props.phone.length >= 9 ? "#2666ee" : "#fff")};
  background: ${(props) => (props.phone.length >= 9 ? "#f3d632" : "#cac9c9")};
  border-radius: 5px;
  border: ${(props) =>
    props.phone.length >= 9 ? "1px solid #f3d632" : "1px solid #cac9c9"};
  width: 25%;
  font-size: 15px;
  font-weight: 600;
`;

export const UserName = styled.h4`
  font-size: 0.9rem;
  margin-top: ${(props) => (props.edit ? "-1.2rem" : "0")};
`;

export const H4 = styled.h4`
  font-size: 1rem;
`;

export const UserAddress = styled.p`
  font-size: 0.8rem;
  margin-bottom: 8px;
  line-height: 1.2;
`;

export const P = styled.p`
  font-size: 0.9rem;
  margin-bottom: -4px;
  color: black;
`;

export const Price = styled.p`
  font-size: 0.9rem;
  margin-top: 4px;
`;

export const PSmall = styled.p`
  font-size: 0.85rem;
  padding-bottom: -8px;
`;

export const UserNumber = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

export const HorizontalLine = styled.div`
  border-top: 1px solid #afadad;
  width: 100%;
  margin-top: -0.5rem;
  margin-bottom: 1.2rem;
`;

export const DottedLine = styled.div`
  border-top: 1px dashed #afadad;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const IconBg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.15rem solid #2666ee;
  background: #2666ee;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  left: 180px;
  top: -20px;
`;

export const YellowBgButton = styled.button`
  margin-top: 1.2rem;
  background: #f3d632;
  color: #2666cc;
  width: 90%;
  border: 1px solid #f3d632;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 18px;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const WhiteBgButton = styled.button`
  background: #fff;
  color: #2666ee;
  width: 30%;
  border: 1px solid #2666ee;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 0.8rem;
`;

export const YellowBtn = styled.button`
  background: #f3d632;
  color: #2666cc;
  width: 180px;
  border: 1px solid #f3d632;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 12px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-left: 1rem;
`;

export const WhiteBtn = styled.button`
  background: #fff;
  color: #2666ee;
  width: 130px;
  border: 1px solid #2666ee;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 0.8rem;
`;

export const Count = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: #2666cc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 5px;
  margin-left: 10px;
  margin-top: 0;
`;
