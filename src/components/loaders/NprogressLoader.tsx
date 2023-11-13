import { useEffect } from 'react';
import nProgress from 'nprogress';

export default function NProgressLoader() {
  useEffect(() => {
    nProgress.start();
    nProgress.set(0.5);
    return () => {
      nProgress.done();
    };
  }, []);
  return null;
}
