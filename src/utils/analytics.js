import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { Router } from '../routes';

const AnalyticsContext = createContext(null);

const DOMAINS = ['smiling-mark-270607.appspot.com'];

export const GTM_ID = 'GTM-MGXBT7L';

const HOTJAR_SETTINGS = { hjid: 1542511, hjsv: 6 };

export const AnalyticsProvider = ({
  isCookieAccepted,
  analyticsData,
  children,
}) => {
  const dataLayerBuffer = React.useMemo(() => [], []);

  useEffect(() => {
    if (isCookieAccepted) {
      ((w, d, s, l, i) => {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js',
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', GTM_ID);
      if (DOMAINS.includes(location.hostname)) {
        ((h, o, t, j, a, r) => {
          h.hj =
            h.hj ||
            function() {
              (h.hj.q = h.hj.q || []).push(arguments);
            };
          h._hjSettings = HOTJAR_SETTINGS;
          a = o.getElementsByTagName('head')[0];
          r = o.createElement('script');
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
      }
    }
  }, [isCookieAccepted]);

  const contextValue = useCallback(
    (payload) => {
      if (!analyticsData) {
        dataLayerBuffer.push(payload);
        return;
      }
      window.dataLayer.push({
        ...analyticsData,
        ...payload,
      });
      /* eslint-disable no-console */
      console.log('dataLayer push: ', {
        ...analyticsData,
        ...payload,
      });
    },
    [analyticsData]
  );
  React.useEffect(() => {
    if (analyticsData && dataLayerBuffer.length) {
      let payload;
      while ((payload = dataLayerBuffer.shift())) {
        contextValue(payload);
      }
    }
  }, [contextValue]);
  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const DEFAULT_RATING_ANALITICS = {
  userId: 1,
  movieId: 1,
  rating: 1,
};

export const Pageview = () => {
  const push = useContext(AnalyticsContext);
  React.useEffect(() => {
    push({
      event: 'pageview',
    });
  }, [Router.router && Router.router.asPath]);
  return null;
};

export const useAnalytics = (content) => {
  const push = useContext(AnalyticsContext);
  useEffect(() => {
    content && push({ ...DEFAULT_RATING_ANALITICS, ...content });
  }, [push, JSON.stringify(content)]);
};

export const useAnalyticsClick = (content) => {
  const push = useContext(AnalyticsContext);
  return useCallback(() => {
    push({ ...DEFAULT_RATING_ANALITICS, ...content });
  }, [push, JSON.stringify(content)]);
};

const getSearchAnaliticsDiscipline = (id, disciplines) => {
  if (id) {
    const [type, idstr] = id.split('-');
    const idNumeric = parseInt(idstr);
    switch (type) {
      case 'd': {
        const discipline = disciplines.find(({ id }) => id === idNumeric);
        if (discipline) {
          return discipline.translatedName || discipline.name;
        }
        break;
      }
      case 's': {
        return disciplines.reduce((out, discipline) => {
          if (!out) {
            const service = discipline.services.find(
              ({ id }) => id === idNumeric
            );
            if (service) {
              return `${discipline.translatedName ||
                discipline.name}/${service.translatedName || service.name}`;
            }
          }
          return out;
        }, '');
      }
    }
  }
  return '';
};

const getSearchAnaliticsEquipment = (id, equipmentList) => {
  if (id) {
    const idNumeric = parseInt(id);
    const equipment = equipmentList.find(({ id }) => id === idNumeric);
    if (equipment) {
      return equipment.translatedName || equipment.name;
    }
  }
  return '';
};

const getSearchAnaliticsAnimalType = (id, animalTypes) => {
  if (id) {
    const idNumeric = parseInt(id);
    const animalType = animalTypes.find(({ id }) => id === idNumeric);
    if (animalType) {
      return animalType.translatedName;
    }
  }
  return '';
};

export const getSearchAnalitics = (
  filters,
  disciplines,
  equipmentList,
  animalTypes
) => {
  const animalType = getSearchAnaliticsAnimalType(
    filters.animalType,
    animalTypes
  );
  const searchQuery = filters.q || '';
  const discipline = getSearchAnaliticsDiscipline(
    filters.discipline,
    disciplines
  );
  const equipment = getSearchAnaliticsEquipment(
    filters.equipment,
    equipmentList
  );
  const searchRadius = parseInt(filters.range) || 50;
  const searchParameters = [];
  if (searchQuery) {
    searchParameters.push('searchQuery');
  }
  if (discipline) {
    searchParameters.push('discipline');
  }
  if (equipment) {
    searchParameters.push('equipment');
  }

  return {
    animalType,
    searchQuery,
    discipline,
    equipment,
    searchParameters: searchParameters.join(','),
    searchRadius,
  };
};
