// External imports
import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

// Local imports
import GitHubIcon from '../../../../assets/icons/GitHubIcon';

interface SideBarFooterProps {
  isCollapsed: boolean;
}

const StyledSidebarFooter = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(45deg, #94e2cd 0%, #4cceac 100%);
`;

const codeUrl = process.env.GITHUB_PROJECT_PATH;

function SideBarFooter({ isCollapsed }: SideBarFooterProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '25px',
      }}
    >
      {isCollapsed ? (
        <StyledSidebarFooter
          data-testid='collapsed-sidebar-footer'
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginTop: '750px' }}
          onClick={() => window.open(codeUrl, '_blank')}
        >
          <GitHubIcon size={30} />
        </StyledSidebarFooter>
      ) : (
        <StyledSidebarFooter
          data-testid='expanded-sidebar-footer'
          style={{ width: '50%', padding: '20px', borderRadius: '8px' }}
          onClick={() => window.open(codeUrl, '_blank')}
        >
          <div style={{ marginBottom: '10px' }}>
            <GitHubIcon size={50} />
          </div>

          <div style={{ marginTop: '10px' }}>
            <Typography fontWeight={600}>See Code</Typography>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  );
}

export default SideBarFooter;
