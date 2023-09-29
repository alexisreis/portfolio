import '@/css/tailwind.css';
import '@/css/prism.css';
import 'katex/dist/katex.css';

import '@fontsource/inter/variable-full.css';

import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import siteMetadata from '@/data/siteMetadata';
import LayoutWrapper from '@/components/LayoutWrapper';
import { ClientReload } from '@/components/ClientReload';

import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }) {

  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <I18nProvider lngDict={lngDict} locale={router?.locale}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </I18nProvider>
  );
}
