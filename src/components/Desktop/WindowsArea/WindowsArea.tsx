import { useImmerAtom } from 'jotai/immer';
import { useMemo } from 'preact/compat';
import styled from 'styled-components';
import { appsConfig } from '__/data/apps/apps-config';
import { openAppsStore, TApp } from '__/stores/apps.store';
import { Window } from '../Window/Window';

export const WindowsArea = () => {
  const [openApps] = useImmerAtom(openAppsStore);

  const appIDList = useMemo(() => Object.keys(appsConfig) as TApp[], []);

  return (
    <Container>
      {appIDList.map(
        (appID) =>
          openApps[appID] &&
          appsConfig[appID].shouldOpenWindow && <Window key={appID} appID={appID} />,
      )}
    </Container>
  );
};

const Container = styled.section`
  display: block;
`;
