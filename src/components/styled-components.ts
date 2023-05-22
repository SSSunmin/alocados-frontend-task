import styled from 'styled-components';

export const PageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 118px);
`;

export const LogoTitle = styled.span`
	font-weight: bold;
	font-size: 25px;
`;

export const Topbar = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.p`
	font-weight: bold;
	font-size: 20px;
	color: #2a3249;
	margin-bottom: 24px;
`;

export const MiddleText = styled.span`
	margin-left: 5px;
	font-size: 16px;
	font-weight: 600;
`;
export const IconName = styled(MiddleText)`
	color: #4c5b7a;
`;
export const SmallText = styled.span`
	font-size: 14px;
	color: #2a3249;
`;

export const FlexDiv = styled.div`
	display: flex;
`;
export const FlexColumnDiv = styled(FlexDiv)`
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
const Button = styled.button`
	border: none;
	border-radius: 12px;
`;
export const LongButton = styled(Button)<{ able: boolean }>`
	width: 635px;
	height: 56px;
	font-size: 15px;
	background: ${(props) => (props.able ? '#5D28F2' : '#E0E2E8')};
	color: ${(props) => (props.able ? 'white' : '#A9B0C1')};
`;
