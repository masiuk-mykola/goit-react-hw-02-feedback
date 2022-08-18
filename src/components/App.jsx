import { Box } from './Box';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Box p={25} textAlign="center" height={'100vh'}>
      <Feedback />
    </Box>
  );
};
