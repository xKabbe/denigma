// External imports
import { Grid } from '@mui/material';
import { SeqViz } from 'seqviz';

// Local imports
import HelloWorld from '../../components/HelloWorld/HelloWorld';

// Component definition
function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <HelloWorld
          box={{
            sx: {
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <SeqViz
          name='J23100'
          seq='TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC'
          annotations={[{ name: 'promoter', start: 0, end: 34, direction: 1, color: 'blue' }]}
          style={{ height: '100vh', width: '50vw' }}
        />
      </Grid>
    </Grid>
  );
}

// Default export
export default HomePage;
