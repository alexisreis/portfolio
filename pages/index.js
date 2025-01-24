import EducationList from '@/components/list/EducationList';
import HomeHeading from '@/components/HomeHeading';
import OrganizationsList from '@/components/list/OrganizationsList';
import WorkXpList from '@/components/list/WorkXpList';
import { PageSEO } from '@/components/SEO';
import CertificationsList from '@/components/list/CertificationsList';
import ProjectsList from '@/components/list/ProjectsList';
import PresentationTiles from '@/components/PresentationTiles';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import siteMetadata from '@/data/siteMetadata';

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter('blog');
  const { default: lngDict = {} } = await import(`../locales/${locale}`);

  return { props: { posts, lngDict } };
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <HomeHeading />
      <PresentationTiles />
      <ProjectsList />
      <WorkXpList />
      <CertificationsList />
      <EducationList />
      <OrganizationsList />
    </>
  );
}
