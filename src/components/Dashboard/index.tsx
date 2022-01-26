import Board from '../Board';
import { DashboardContainer, DashboardTitle } from './styles';

export function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardTitle>Revenue & Perfomance</DashboardTitle>
      <Board />
    </DashboardContainer>
  )
}
