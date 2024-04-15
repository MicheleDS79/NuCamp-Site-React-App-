import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
   
    return (
        <Container>
            <SubHeader current='Direcotry'/>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;