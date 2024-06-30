import { useContext } from 'react';
import { ProjectContext } from './Container';

//Custom Hook
const useProjectContext = () => useContext(ProjectContext);
export default useProjectContext;
